<template>
  <div class="container">
    <h1>Já jsem Vue aplikace</h1>
    <MyCounter 
    v-for="(color, index) in properties"
    v-bind:color="color.color"
    v-bind:max="color.max"
    v-bind:key="index"
      />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: 'App',
  components: {
    MyCounter: Counter
  },
  data(){
    return {
      properties: [
        {color: "blue", max: "1"},
        {color: "red", max: "2"},
        {color: "green", max: "10"},
        {color: "yellow", max: "4"},
        {color: "orange", max: "3"}
      ]
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
</style>