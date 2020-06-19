<template>
  <div class="container">
    <h1>E-shopíček</h1>
    <h2>Košík: {{ cart }} položek</h2>
    <div class="product-list">
      <Product name="Banány" @select="addToCart" />
      <Product name="Jablka" @select="addToCart" />
      <Product name="IPhone" @select="addToCart" />
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'App',
  components: {
    Product: Product,
  },
  data() {
    return {
      cart: 0,
    };
  },
  methods: {
    addToCart(selected) {
      if (selected) {
        this.cart += 1;
      } else {
        this.cart -= 1;
      }
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

.product-list {
  display: flex;
}
</style>