<template>
<div>
<div 
class="counter" 
v-bind:style="{ 'background-color': color}" 
v-on:click="addNumber" 
>
{{ firstNumber }}
</div>
</div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      firstNumber: 0
    }
  },
  methods: {
    addNumber() {
      if (this.firstNumber < this.max) {
        this.firstNumber++
      }
    }
  },
  props: ["color", "max"]
};
</script>

<style>
.counter {
  width: 3rem;
  height: 3rem;
  margin: 1rem 2rem;
  line-height: 3rem;
  text-align: center;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  color: white;
  background-color: orange;
  cursor: pointer;
}

</style>