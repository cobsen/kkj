<template>
  <div class="foo">
    <img class="stripes" src="../src/logo01-01.svg" />
  </div>
  <div id="content">
    <div>
      <div class="label">Konferenz</div>
    </div>
    <Konferenz />
    <div><div class="label">Charta</div></div>
    <Charta />
    <div>
      <div class="label">
        <div>Studie</div>
      </div>
    </div>
    <Studie />
    <div>
      <div class="label">
        <div>Blog &<br />Newsletter</div>
      </div>
    </div>
    <Blog />
    <div>
      <div class="label">
        <div>Team</div>
      </div>
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
}

.label {
  font-size: 48px;
  line-height: 1;
  text-align: right;
  position: sticky;
  top: 100px;
  height: 100px;
  font-weight: bold;
  img {
    position: absolute;
    top: 0;
    left: 0;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.foo {
  position: sticky;
  top: 0;
  left: 0;
  height: 0;
}
.stripes {
  width: 400px;
}
</style>
