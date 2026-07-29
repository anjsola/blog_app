<template>
  <div>
    <Navbar />

    <div class="auth">
      <h2>Login</h2>

      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '../services/api.js'
import Navbar from '../components/Navbar.vue'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await API.post('/auth/login', {
      email: email.value,
      password: password.value,
    })

    //save the token in localStorage or cookies
    localStorage.setItem('token', response.data.token)
    alert('Login successful!')
    console.log('Login response:', response.data)
    router.push('/') // Redirect to home page after successful login
  } catch (error) {
    console.error('Error during login:', error)
    alert('Login failed. Please check your credentials and try again.')
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