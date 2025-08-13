<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Everything you need, delivered.</h1>
      <p>Discover our curated collection of premium products.</p>
      <button @click="scrollToProducts">Shop now</button>
    </div>
  </section>
</template>
<script setup>
function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
}
</script>
<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}
.hero-content h1 { font-size: 3rem; margin-bottom: 1rem; }
.hero-content button {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  background: #fff;
  color: #764ba2;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s;
}
.hero-content button:hover { transform: scale(1.05); }
</style>