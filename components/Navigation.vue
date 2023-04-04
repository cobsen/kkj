<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="{ name: 'konferenz' }">Konferenz</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'charta' }">Charta</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'studie' }">Studie</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'blog' }">Blog und Newsletter</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'team' }">Team</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'impressum' }">Imppressum & Kontakt</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'datenschutz' }">Datenschutz</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
nav {
  position: fixed;
  height: 100vh;
  width: 300px;
}
ul {
  list-style: none;
  text-align: right;
  margin-right: 24px;
  position: absolute;
  top: 30vh;
  right: 0;
  transform: translateY(-50%);
  li {
    .router-link-active {
      font-weight: bold;
    }
  }
}
</style>
