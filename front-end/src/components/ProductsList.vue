<template>
  <!-- v-if displays products if they are greater than zero -->
  <div v-if="products.length > 0">
    <!-- traversing array of product objects
    using v-for
    loading specific data using v-bind
    v-on:remove-from-cart="$emit('remove-from-cart', $event)"
    allows the button to bubble the custom remove-from-cart event
    to some other component
    Then $event gets us the product id- -->
    <ProductsListItem
      v-for="product in products"
      v-on:remove-from-cart="$emit('remove-from-cart', $event)"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
  <!-- v-else displays no products if products are equal to zero,
  rather a message informing the user that their cart is empty -->
  <p v-else>You haven't added anything to your cart yet :(</p>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";
export default {
  name: "ProductsList",
  //   props allows for views to share data with each other
  props: ["products"],
  // Register ProductsListItem
  components: {
    ProductsListItem,
  },
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
</style>