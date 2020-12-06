<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <!-- traversing array of product objects
    using v-for
    loading specific data using v-bind -->
    <div
      v-for="product in cartItems"
      v-bind:key="product.id"
      class="product-container"
    >
      <img class="product-image" v-bind:src="product.imageUrl" />
      <div class="details-wrap">
        <h3>{{ product.name }}</h3>
        <!-- R is NOT special
    just represents symbol for the South African currency -->
        <p>R{{ product.price }}</p>
      </div>
      <button class="remove-button">Remove From Cart</button>
    </div>
    <h3 id="total-price">Total: R{{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
// loading some fake/dummy data
import { cartItems } from "../fake-data";
export default {
  name: "CartPage",
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

.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>