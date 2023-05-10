<template>
  <div class="logo">
    <img src="../src/logo.svg" alt="" />
  </div>
  <div id="content">
    <div id="konferenz">
      <div class="label">Konferenz<br />& Anmeldung</div>
    </div>
    <Konferenz />
    <div id="programm">
      <div class="label">Programm</div>
    </div>
    <Programm />
    <!--
    <div id="charta">
      <div class="label">Charta</div>
    </div>
    <Charta />
    <div id="studie">
      <div class="label">Studie</div>
    </div>
    <Studie /> 
    -->
    <div id="blog">
      <div class="label">Blog</div>
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
  meta: [{ name: "description", content: "Am 6. und 7. Juli findet im taz Haus in Berlin die Konferenz für Konstruktiven Journalismus 2023 statt. Jetzt anmelden!" }],
});
</script>

<style scoped lang="scss">
#content {
  display: grid;
  grid-template-columns: 480px 1fr;
  grid-gap: 24px;

  &> :first-child {
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
  top: 135px;
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
    width: 480px;
  }

  @include breakpoint(tablet) {
    position: relative;
    display: none;
  }
}
</style>
