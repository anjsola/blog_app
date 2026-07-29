<template>
  <div>
    <Navbar />
    <HeroSection />

    <section class="articles">
      <div class="top">
        <h2>Latest articles</h2>
        <span>All categories ></span>
      </div>

    <div v-if="loading">Loading articles...</div> 

    <div v-else class="grid">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :image="article.image || 'https://via.placeholder.com/150'"
      />
    </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import API from "../services/api.js"
import Navbar from "../components/Navbar.vue"
import HeroSection from "../components/HeroSection.vue"
import ArticleCard from "../components/ArticleCard.vue"

const articles = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await API.get("/posts")
    articles.value = response.data
  } catch (error) {
    console.error("Error fetching articles:", error)
  } finally {
    loading.value = false
    console.log("Articles fetched:", articles.value)
  }
})

</script>

<style scoped>
.articles {
  background: #f1ede6;
  padding: 60px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>