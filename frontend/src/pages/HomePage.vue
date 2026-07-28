<template>
  <div>
    <Navbar />
    <HeroSection />

    <section class="articles">
      <div class="top">
        <h2>Latest articles</h2>
        <span>All categories ></span>
      </div>

      <div class="grid">
        <ArticleCard
          title="Building Agentic apps with AWS"
          image="https://images.unsplash.com/photo-1677442135136-760c813028c0"
        />

        <ArticleCard
          title="Not Giving up"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />

        <ArticleCard
          title="Welcome To Jola’s Blog"
          image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
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

onMounted(async () => {
  try {
    const response = await API.get("/articles")
    articles.value = response.data
  } catch (error) {
    console.error("Error fetching articles:", error)
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