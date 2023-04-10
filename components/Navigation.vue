<template>
  <nav>
    <h1>Konferenz für Konstruktiven Journalismus 2023</h1>
    <ul>
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
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
h1 {
  margin: 0;
}
ul {
  list-style: none;
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
}
</style>
