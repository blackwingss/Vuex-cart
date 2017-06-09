<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>products</h2>
    <product-list>
    </product-list>
    <hr>
    <cart></cart>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import Cart from './components/Cart'
export default {
  name: 'app',
  components: {
    ProductList,
    Cart
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app  {
  width: 500px;
  margin: 0 auto;
}
</style>
