<template>
  <div>
    <Navbar /> 

    <!--Create Post Button -->
      <div class="create-post-button">
        <button v-if="user" @click="$router.push('/create-post')">Create Post</button>
      </div>

    <section class="articles">
      <h1>All Articles</h1>

      <div class="grid">
        <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :title="article.title"
          :image="article.image || 'https://via.placeholder.com/150'"
          :content="article.content.substring(0, 100) + (article.content.length > 100 ? '...' : '')"
        >
        </ArticleCard>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import ArticleCard from '../components/ArticleCard.vue'
import { jwtDecode } from 'jwt-decode'
import API from '../services/api.js'

const user = ref(null)
const articles = ref([])

//set user if token is present in local storage
onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    user.value = jwtDecode(token)
  }
})
//fetch articles from backend
onMounted(async () => {
  try {
    const response = await API.get('/posts')
    console.log('Fetched articles:', response)
    // const data = await response.json()
    articles.value = response.data
  } catch (error) {
    console.error('Error fetching articles:', error)
  }
})

// const loading = ref(true) // Add a loading state

// onMounted(async () => {
//   try {
//     const response = await API.get("/posts")
//     articles.value = response.data
//   } catch (error) {
//     console.error("Error fetching articles:", error)
//   }finally {
//     loading.value = false // Set loading to false after the request is completed
//     console.log("Articles fetched:", articles.value)
//   }
// })

// async function deletePost(id){
//   try{
//     await API.delete(' /posts/${id}', {
//       headers: {
//         Authorization: 'Bearer ${localStorage.getItem("token")}'
//       }
//     });

//   articles.value = articles.value.filter(p => p.id !==id);

//   }catch (err) {
//     console.error(err)
//   }
// }

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

</style>