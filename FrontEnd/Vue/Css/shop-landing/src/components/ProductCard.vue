<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>${{ product.price.toFixed(2) }}</p>
    <button @click="$emit('add', product)">Add to cart</button>
  </div>
</template>
<script setup>
defineProps({ product: Object })
defineEmits(['add'])
</script>
<style scoped>
.card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: transform .2s;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-4px); }
.card img { width: 100%; aspect-ratio: 1/1; object-fit: cover; }
.card h3 { margin: 1rem 1rem 0.25rem; font-size: 1.1rem; }
.card p  { margin: 0 1rem 1rem; color: #666; }
.card button {
  margin: 0 1rem 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #667eea;
  color: #fff;
  cursor: pointer;
}
</style>