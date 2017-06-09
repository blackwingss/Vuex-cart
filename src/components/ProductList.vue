<template lang="html">
  <ul>
    <li v-for="p in products">
      {{p.title}} - {{p.price}}
      <br>
      <button @click="addToCart(p)"
      type="button" name="button">Add to cart</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: mapGetters({
    products: 'allProducts'
  }),
  mounted () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>

<style lang="css">
</style>
