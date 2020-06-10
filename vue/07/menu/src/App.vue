<template>
  <div class="container">
    <Menu />
    <div class="page">
      <h1> {{ title }} </h1>
    </div>
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'App',
  components: {
    Menu: Menu,
  },
  data() {
    return{
      title: "Název stránky"
    }
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  display: flex;
  height: 100vh;
}

.page {
  padding: 2rem 4rem;
}

</style>