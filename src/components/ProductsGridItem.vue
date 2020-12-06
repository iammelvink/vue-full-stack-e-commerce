<template>
  <div class="product-item">
    <!-- loading specific data using v-bind -->
    <img v-bind:src="product.imageUrl" />
    <h3 class="product-name">{{ product.name }}</h3>
    <!-- R is NOT special
    just represents symbol for the South African currency -->
    <p class="product-price">R{{ product.price }}</p>
    <router-link v-bind:to="'/products/' + product.id">
      <button>View Details</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "ProductsGridItem",
  //   props allows for views to share data with each other
  props: ["product"],
};
</script>

<style scoped>
/* scoped means css style will ONLY affect this file */
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>