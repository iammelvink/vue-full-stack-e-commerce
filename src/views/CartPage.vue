<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <!-- loading specific data using v-bind
    from products prop -->
    <ProductsList v-bind:products="cartItems" />
    <h3 id="total-price">Total: R{{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
// loading some fake/dummy data
import { cartItems } from "../fake-data";
import ProductsList from "../components/ProductsList.vue";
export default {
  name: "CartPage",
  // Register ProductsList
  components: {
    ProductsList,
  },
  data() {
    return {
      cartItems,
    };
  },
  // computed will refresh whenever a change that affects it occurs
  computed: {
    totalPrice() {
      // Remember to convert to a Number
      // We initialize it to 0
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>