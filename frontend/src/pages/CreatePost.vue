<template>
    <div>
        <Navbar />

        <div class="form">
            <h2>Create a New Post</h2>

            <form @submit.prevent="createPost">

                <input v-model="title" type="text" placeholder="Title" />
                <textarea v-model="content" placeholder="Write your post..."></textarea>

                <button @click="createPost">Create Post</button>
            </form>
            <p v-if="error" class="error">{{ error }}</p>
            <p v-if="success" class="success">{{ success }}</p>
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
const error = ref("")
const success = ref("")


const createPost = async () => {
    try {
        success.value = ""
        error.value = ""

        const token = localStorage.getItem("token")
        const response = await API.post("/posts", {
            title: title.value,
            content: content.value,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        success.value = "Post created successfully!"
        title.value = ""  // Clear the input fields after successful post creation
        content.value = ""// Clear the input fields after successful post creation
        
        console.log("Post created:", response.data)
        router.push("/") // Redirect to home page after successful post creation
    } catch (error) {
        console.error("Error creating post:", error)
        error.value = 
            error.response && error.response.data && error.response.data.message
            ? error.response.data.message    
        : "An error occurred while creating the post."
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