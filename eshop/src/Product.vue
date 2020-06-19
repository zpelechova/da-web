<template>
  <div
    :class="['product', { 'product--selected': selected }]" 
    @click="handleSelect"
  >
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    name: String,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    handleSelect() {
      this.selected = !this.selected;
      this.$emit('select', this.selected);
    }
  },
};
</script>

<style lang="css">
.product {
  padding: 2rem;
  background-color: lightgray;
  border-radius: 0.5rem;
  margin: 1rem;
}

.product--selected {
  background-color: orange;
}
</style>