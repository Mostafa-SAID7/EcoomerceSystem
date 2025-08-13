<template>
  <section id="products" class="product-section">
    <h2>Featured Products</h2>
    <div class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add="addToCart"
      />
    </div>
  </section>
  <!-- mini cart indicator -->
  <div v-if="cart.length" class="cart-indicator">
    🛒 {{ cart.length }} item(s)
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref([])
const cart      = ref([])

onMounted(async () => {
  const res = await fetch('/src/assets/products.json')
  products.value = await res.json()
})

function addToCart(product) {
  cart.value.push(product)
}
</script>
<style scoped>
.product-section { padding: 4rem 2rem; max-width: 1200px; margin: auto; }
.product-section h2 { text-align: center; margin-bottom: 2rem; font-size: 2rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}
.cart-indicator {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
</style>