<template>
  <div>
    <Navbar />

    <div class="auth">
      <h2>Create Account</h2>

      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button>Sign Up</button>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>