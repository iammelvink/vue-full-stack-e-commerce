import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [
  // Products route
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  // Products id  route
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  },
  // Cart route
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  // Redirects root to Products page
  {
    path: '/',
    redirect: '/products',
  },
  // 404/NotFoundPage
  {
    // * means any page that does NOT exist in the routes
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
