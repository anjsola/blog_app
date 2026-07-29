<template>
    <div>
        <Navbar />

        <div class="form">
            <h2>Create a New Post</h2>

            <input v-model="title" type="text" placeholder="Title" />
            <textarea v-model="content" placeholder="Content"></textarea>

            <button @click="createPost">Create Post</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue" 
import { useRouter } from "vue-router"
import API from "../services/api.js"
import Navbar from "../components/Navbar.vue"

const title = ref("")
const content = ref("")
const router = useRouter()

const createPost = async () => {
    try {
        const response = await API.post("/posts", {
            title: title.value,
            content: content.value,
        })
        alert("Post created successfully!")
        console.log("Post created:", response.data)
        router.push("/") // Redirect to home page after successful post creation
    } catch (error) {
        console.error("Error creating post:", error)
        alert("Failed to create post. Please try again.")
    }
}
</script>  

<style scoped>
.form {
  max-width: 500px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  padding: 12px;
  background: #0f2d26;
  color: white;
  border: none;
  border-radius: 8px;
}
</style>