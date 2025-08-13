<template>
  <footer>
    <p>&copy; {{ year }} My Awesome Shop</p>
    <a href="https://github.com/you/vue-shop-landing" target="_blank">GitHub</a>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear()
</script>
<style scoped>
footer {
  text-align: center;
  padding: 2rem;
  background: #f7f7f7;
  color: #555;
}
footer a { color: #667eea; margin-left: 1rem; }
</style>