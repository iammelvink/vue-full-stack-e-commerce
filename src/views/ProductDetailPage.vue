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
      <button id="add-to-cart">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <!-- v-else will display the NotFoundPage when product id does NOT exist -->
  <NotFoundPage v-else />
</template>

<script>
// loading some fake/dummy data
import { products } from "../fake-data";
import NotFoundPage from "./NotFoundPage";
export default {
  name: "ProductDetailPage",
  // Register NotFoundPage
  components: {
    NotFoundPage,
  },
  data() {
    return {
      // finds the id of the product
      // and displays that specific product
      // on the ProductDetailPage
      product: products.find((p) => p.id === this.$route.params.id),
    };
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
</style>