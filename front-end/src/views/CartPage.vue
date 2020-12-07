<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <!-- loading specific data using v-bind
    from products prop
    v-on:remove-from-cart="removeFromCart($event)"
    listens for our custom `remove-from-cart` event
    Then $event gets us the product id-->
    <ProductsList
      v-bind:products="cartItems"
      v-on:remove-from-cart="removeFromCart($event)"
    />
    <h3 id="total-price">Total: R{{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import axios from "axios";
import ProductsList from "../components/ProductsList.vue";
export default {
  name: "CartPage",
  // Register ProductsList
  components: {
    ProductsList,
  },
  data() {
    return {
      // initialize to an empty array
      cartItems: [],
    };
  },
  // computed property will refresh whenever a change that affects it occurs
  computed: {
    totalPrice() {
      // Remember to convert to a Number
      // We initialize it to 0
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  methods: {
    // method to delete item from a users  cart
    async removeFromCart(productId) {
      // notice user id is hard coded in this example
      // this is for NOT hard coded user id
      // using back ticks for template strings
      // const result = await axios.delete(`/api/users/${this.$route.params.id}/cart/${productId}`);
      const result = await axios.delete(`/api/users/12345/cart/${productId}`);
      // update cart items
      this.cartItems = result.data;
    },
  },
  /**
   * life cycle function
   * will request data from backend
   * when page loads
   */
  async created() {
    // notice user id is hard coded in this example
    const result = await axios.get("/api/users/12345/cart");
    // this is for NOT hard coded user id
    // using back ticks for template strings
    // const result = await axios.get(`/api/users/${this.$route.params.id}/cart`);
    // loads cartItems data from server
    const cartItems = result.data;
    // set cartItems in vue component to cartItems from server
    this.cartItems = cartItems;
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