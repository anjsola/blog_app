<template>
  <div>
    <Navbar />

    <div class="article">
      <h1>Article Title</h1>
      <p class="meta">By Anjola • July 2026</p>

      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />

      <p>
        This is where your full article content will go.
      </p>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.article {
  max-width: 800px;
  margin: 60px auto;
}

img {
  width: 100%;
  border-radius: 12px;
  margin: 20px 0;
}
</style>