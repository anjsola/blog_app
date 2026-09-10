<template>
  <div>
    <Navbar />

    <div class="auth">
      <h2>Create Account</h2>

      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />

      <button @click="signup">Sign Up</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '../services/api.js'
import Navbar from '../components/Navbar.vue'

const username = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const signup = async () => {
  try {
    const response = await API.post('/auth/register', {
      username: username.value,
      email: email.value,
      password: password.value,
    })
    alert('Account created successfully!')
    console.log('Signup response:', response.data)
    router.push('/login') // Redirect to login page after successful signup
  } catch (error) {
    console.error('Error during signup:', error)
    alert('Failed to create account. Please try again.')
  }
}
</script>

<style scoped>
.auth {
  max-width: 400px;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
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