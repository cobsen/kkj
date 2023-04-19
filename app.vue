<template>
  <div id="main">
    <Navigation />
    <OverlayScrollbarsComponent
      :options="{ scrollbars: { autoHide: 'move' } }"
      :events="{ scroll: foo }"
      ref="$scrollbar"
    >
      <NuxtPage />
    </OverlayScrollbarsComponent>
  </div>
  <div id="bg-wrap">
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient
          id="Gradient1"
          cx="50%"
          cy="50%"
          fx="0.441602%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="34s"
            values="0%;30%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
          <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient2"
          cx="50%"
          cy="50%"
          fx="2.68147%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="23.5s"
            values="0%;30%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
          <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient3"
          cx="50%"
          cy="50%"
          fx="0.836536%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="21.5s"
            values="0%;30%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
          <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
        </radialGradient>
        <radialGradient
          id="Gradient4"
          cx="50%"
          cy="50%"
          fx="4.56417%"
          fy="50%"
          r=".5"
        >
          <animate
            attributeName="fx"
            dur="23s"
            values="0%;30%;0%"
            repeatCount="indefinite"
          ></animate>
          <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
          <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
        </radialGradient>
      </defs>

      <rect
        x="13.744%"
        y="1.18473%"
        width="100%"
        height="100%"
        fill="url(#Gradient1)"
        transform="rotate(334.41 50 50)"
      >
        <animate
          attributeName="x"
          dur="40s"
          values="25%;0%;25%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="21s"
          values="0%;10%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="20s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="-2.17916%"
        y="35.4267%"
        width="100%"
        height="100%"
        fill="url(#Gradient2)"
        transform="rotate(255.072 50 50)"
      >
        <animate
          attributeName="x"
          dur="40s"
          values="-25%;0%;-25%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="24s"
          values="0%;10%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="20s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
      <rect
        x="9.00483%"
        y="14.5733%"
        width="100%"
        height="100%"
        fill="url(#Gradient3)"
        transform="rotate(139.903 50 50)"
      >
        <animate
          attributeName="x"
          dur="40s"
          values="0%;25%;0%"
          repeatCount="indefinite"
        ></animate>
        <animate
          attributeName="y"
          dur="12s"
          values="0%;10%;0%"
          repeatCount="indefinite"
        ></animate>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur="20s"
          repeatCount="indefinite"
        ></animateTransform>
      </rect>
    </svg>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import "@fontsource/space-grotesk";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue/overlayscrollbars-vue.es.js";
import type { OverlayScrollbarsComponentRef } from "overlayscrollbars-vue";
import { ref, onMounted } from "vue";

import { useRouteHash } from "@vueuse/router";

const body = ref<HTMLBodyElement | null>(null);

onMounted(() => {
  body.value = document.getElementsByTagName("body")[0];
  if (search.value) {
    const elem = document.getElementById(search.value.replace("#", ""));
    const offset = elem?.offsetTop;
    const { viewport } = $scrollbar.value?.osInstance()?.elements();
    viewport.scroll({ top: offset });
  }
});

const $scrollbar = ref<OverlayScrollbarsComponentRef>();

function foo(_instance: OverlayScrollbarsComponentRef, scroll: Event) {
  if (body.value)
    body.value.style.backgroundSize = 100 + scroll.target?.scrollTop / 50 + "%";
}

const search = useRouteHash();

watch(search, (newHash, _) => {
  const elem = document.getElementById(newHash.replace("#", ""));
  const offset = elem?.offsetTop;
  const { viewport } = $scrollbar.value?.osInstance()?.elements();
  viewport.scroll({ top: offset });
});
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
  z-index: 1;
  position: relative;
}

#bg-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #fca58d;
  svg {
    height: 100%;
    width: 100%;
  }
}

section {
  box-sizing: border-box;
  margin-bottom: 48px;
  &.divided:before {
    content: " ";
    display: block;
    margin: 23px 20px 23px 0;
    background: $main;
    height: 3px;
    background-clip: content-box;
  }
  .content {
    white-space: pre-wrap;
    padding: 0 20px 0 0;
  }
}
body {
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  color: $main;
  /*background: rgba(#cedef2, 1);
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
  background-position-y: 100vh;*/
}
.os-scrollbar {
  margin: 32px 0;
  --os-handle-bg: rgba(255, 255, 255, 0.4);
  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);
  --os-handle-bg-active: rgba(255, 255, 255, 0.66);
}
.os-viewport {
  scroll-behavior: smooth !important;
}
button {
  padding: 12px 20px;
  border: 3px solid #fff;
  border-radius: 10px;
  margin: 40px 0 0;
  background: transparent;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #fff;
    color: #fca58d;
  }
}
</style>
