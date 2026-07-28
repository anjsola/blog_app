<template>
  <div>
    <Navbar />

    <section class="container">
      <h1>All Articles</h1>

      <div class="grid">
        <ArticleCard
          v-for="i in 6"
          :key="i"
          title="Sample Article"
          image="https://images.unsplash.com/photo-1677442135136-760c813028c0"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import ArticleCard from '../components/ArticleCard.vue'
</script>

<style scoped>
.container {
  padding: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>