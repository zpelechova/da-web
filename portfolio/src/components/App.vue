<template>
  <div class="container">
    <aside>
      <router-link to="/home">Domů</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Kontakt</router-link>
    </aside>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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

aside {
  padding: 2rem;
  flex: 0 0 12rem;
  background-color: orange;
  height: 100%;
}

aside a {
  display: block;
  line-height: 3rem;
  color: white;
}

main {
  padding: 2rem 4rem;
}
</style>