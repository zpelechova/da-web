<template>
  <div class="container">
    <header>
      <nav class="container">
        <router-link to="/home">Domů</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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

header {
  background-color: brown;
}

nav {
  color: white;
  display: flex;
  justify-content: space-around;
}

nav a {
  line-height: 3rem;
  text-decoration: none;
  color: white;
}

nav a:hover {
  text-decoration: underline;
}

main {
  color: #555;
  line-height: 150%;
}

.container {
  max-width: 24rem;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  margin: 6rem 0rem 4rem 0rem;
}

.menu {
  list-style-type: none;
  padding: 0;
}

.menu li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.price {
  flex: 0 0 4rem;
  font-weight: bold;
}
</style>
