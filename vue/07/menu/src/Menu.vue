<template>
  <aside class="menu">
    <div class="menu__item" @click="display">Domů</div>
    <div class="menu__item" @click="display">Blog</div>
    <div class="menu__item" @click="display">Kontakt</div>
  </aside>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    display() {
      
    }
  }

};
</script>

<style lang="css">
.menu {
  padding-top: 2rem;
  flex: 0 0 12rem;
  width: 12rem;
  height: 100%;
  background-color: deepskyblue;
  color: #555;
}

.menu__item {
  line-height: 2rem;
  padding: 0 2rem;
}
</style>