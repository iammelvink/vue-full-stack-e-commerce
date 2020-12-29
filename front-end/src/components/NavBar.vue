<template>
  <div id="nav-bar">
    <!-- creating routes for NavBar using router-link -->
    <router-link to="/products" id="products-link">
      <h1>Footwear City</h1>
    </router-link>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>


<style scoped>
/* scoped means css style will ONLY affect this file */
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
}

#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  left: 32px;
  position: absolute;
  top: 16px;
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
}

#cart-link {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>