<template>
  <div id="page-wrap"><ProductsGrid v-bind:products="products" /></div>
</template>

<script>
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid.vue";
export default {
  name: "ProductsPage",
  // Register ProductsGrid
  components: {
    ProductsGrid,
  },
  data() {
    return {
      // initialize to an empty array
      products: [],
    };
  },
  /**
   * life cycle function
   * will request data from backend
   * when page loads
   */
  async created() {
    const result = await axios.get("/api/products");
    // loads product data from server
    const products = result.data;
    // set products in vue component to products from server
    this.products = products;
  },
};
</script>