<template>
  <div class="container">
    <!-- <router-link to="/page2">Go to Page 2</router-link> -->
    <router-view></router-view>
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
</style>