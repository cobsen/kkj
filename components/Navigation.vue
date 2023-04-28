<template>
  <nav>
    <h1>Konferenz für Konstruktiven Journalismus 2023</h1>
    <ul :class="{ hidden: !showNavi }">
      <li>
        <NuxtLink :to="{ name: 'index', hash: '#konferenz' }"
          >Konferenz</NuxtLink
        >
      </li>
      <li>
        <NuxtLink :to="{ name: 'index', hash: '#charta' }">Charta</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'index', hash: '#studie' }">Studie</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'index', hash: '#blog' }"
          >Blog und Newsletter</NuxtLink
        >
      </li>
      <li>
        <NuxtLink :to="{ name: 'index', hash: '#team' }">Team</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'impressum' }">Impressum & Kontakt</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'datenschutz' }">Datenschutz</NuxtLink>
      </li>
      <span class="nav-toggle" @click="showNavi = !showNavi">
        <span v-if="showNavi"
          ><img src="../src/navi-close.svg" alt="navigation ausblenden"
        /></span>
        <span v-else
          ><img src="../src/navi.svg" alt="navigation anzeigen"
        /></span>
      </span>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const showNavi = ref(false);
</script>

<style lang="scss">
h1 {
  margin: 0;
}
ul {
  list-style: none;
  position: relative;
  padding: 8px 0;
  border-top: 3px solid $main;
  border-bottom: 3px solid $main;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  li {
    margin-right: 16px;
    a,
    a:visited,
    a:active,
    a:hover {
      color: $main;
      text-decoration: none;
      font-weight: bold;
    }
    .router-link-active {
      font-weight: bold;
    }
  }
  @include breakpoint(tablet) {
    display: block;
    &.hidden {
      border-bottom: none;
      li {
        display: none;
      }
    }
  }
}
.nav-toggle {
  display: none;

  @include breakpoint(tablet) {
    display: block;
    position: absolute;
    top: 8px;
    right: 0;
  }
}
</style>
