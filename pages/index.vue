<template>
  <div class="logo">
    <img src="../src/logo.svg" alt="" />
  </div>
  <div id="content">
    <div id="konferenz">
      <div class="label">Konferenz</div>
    </div>
    <Konferenz />
    <div id="charta"><div class="label">Charta</div></div>
    <Charta />
    <div id="studie">
      <div class="label">Studie</div>
    </div>
    <Studie />
    <div id="blog">
      <div class="label">Blog &<br />Newsletter</div>
    </div>
    <Blog />
    <div id="team">
      <div class="label">Team</div>
    </div>
    <Team />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Konferenz KJ",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style scoped lang="scss">
#content {
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 24px;
  & > :first-child {
    position: relative;
  }
  @include breakpoint(tablet) {
    grid-template-columns: 1fr;
  }
}

.label {
  font-size: 48px;
  line-height: 1;
  text-align: right;
  position: sticky;
  top: 100px;
  height: 100px;
  font-weight: bold;
  @include breakpoint(tablet) {
    grid-template-columns: 1fr;
    height: auto;
    text-align: center;
  }
}

.logo {
  position: sticky;
  top: 0;
  left: 0;
  height: 0;
  img {
    width: 400px;
  }
  @include breakpoint(tablet) {
    position: relative;
    display: none;
  }
}
</style>
