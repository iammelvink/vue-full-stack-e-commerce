<template>
  <div id="page-wrap"><ProductsGrid v-bind:products="products" /></div>
</template>

<script>
// loading some fake/dummy data
import { products } from "../fake-data";
import ProductsGrid from "../components/ProductsGrid.vue";
export default {
  name: "ProductsPage",
  // Register ProductsGrid
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products,
    };
  },
};
</script>