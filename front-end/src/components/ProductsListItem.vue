<template>
  <!-- traversing array of product objects
    using v-for
    loading specific data using v-bind -->
  <div class="product-container">
    <img class="product-image" v-bind:src="product.imageUrl" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <!-- R is NOT special
    just represents symbol for the South African currency -->
      <p>R{{ product.price }}</p>
    </div>
    <!-- $emit function allows the component to emit its event
     to some other component
     Then gets product id
     Then allows the button to bubble the custom remove-from-cart event
    to some other component -->
    <button
      class="remove-button"
      v-on:click="$emit('remove-from-cart', product.id)"
    >
      Remove From Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductsListItem",
  //   props allows for views to share data with each other
  props: ["product"],
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
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