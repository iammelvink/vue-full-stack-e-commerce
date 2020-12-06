<template>
  <div class="grid-wrap">
    <!-- traversing array of product objects
    using v-for
    loading specific data using v-bind -->
    <ProductsGridItem
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </div>
</template>

<script scoped>
/* scoped means css style will ONLY affect this file */
import ProductsGridItem from "./ProductsGridItem.vue";
export default {
  name: "ProductsGrid",
  //   props allows for views to share data with each other
  props: ["products"],
  // Register ProductsGridItem
  components: {
    ProductsGridItem,
  },
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>