<template>
  <!-- v-if shows a product if that product id exists -->
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">R{{ product.price }}</h3>
      <p>Average rating:{{ product.averageRating }}</p>
      <!-- v-on:click invokes a desired method
      show only if item is NOT in cart -->
      <button
        id="add-to-cart"
        v-on:click="addToCart"
        v-if="!showSuccessMessage"
      >
        Add to Cart
      </button>
      <!-- show only if item is in cart -->
      <button id="add-to-cart" class="green-button" v-if="showSuccessMessage">
        Successfully added item to cart
      </button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <!-- v-else will display the NotFoundPage when product id does NOT exist -->
  <NotFoundPage v-else />
</template>

<script>
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
export default {
  name: "ProductDetailPage",
  // Register NotFoundPage
  components: {
    NotFoundPage,
  },
  data() {
    return {
      /**
       * finds the id of the product
       * and displays that specific product
       * on the ProductDetailPage
       * initialize to an empty object
       */
      product: {},
      showSuccessMessage: false,
    };
  },
  // to call methods from within vue template
  methods: {
    async addToCart() {
      // this is for NOT hard coded user id
      // using back ticks for template strings
      // await axios.post(`/api/users/${this.$route.params.id}/cart`);
      // notice user id is hard coded in this example
      await axios.post("/api/users/12345/cart", {
        productId: this.$route.params.id,
      });
      // set showSuccessMessage to true after adding item to cart
      this.showSuccessMessage = true;
      // redirect user to products page after 1000 milliseconds
      setTimeout(() => {
        this.$route.push("/products");
      }, 1000);
    },
  },
  /**
   * life cycle function
   * will request data from backend
   * when page loads
   */
  async created() {
    // using back ticks for template strings
    const result = await axios.get(`/api/products/${this.$route.params.id}`);
    // loads product data from server
    const product = result.data;
    // set product in vue component to product from server
    this.product = product;
  },
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.green-button {
  background-color: green;
}
</style>