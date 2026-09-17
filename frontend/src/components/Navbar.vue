<template>
  <nav class="navbar">
    <div class="logo">Jola’s Blog</div>

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/create-post">
        <button class="create-post">Create Post</button>
      </router-link>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
      
    </div>
  </nav>
</template>

<!-- //show logged in user name if token is present in local storage -->
 <script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = localStorage.getItem('token');
const isLoggedIn = ref(false);

onMounted(() => {
  if (token) {
    isLoggedIn.value = true;
  }
});

function logout() {
  localStorage.removeItem('token');
  isLoggedIn.value = false;
  router.push('/login');
}

watchEffect(() => {
  const token = localStorage.getItem('token');
  isLoggedIn.value = !!token;
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #0f2d26;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.links a {
  color: white;
  text-decoration: none;
  opacity: 0.85;
}

.links a:hover {
  opacity: 1;
}

.create-post {
  background: #e9e5de;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
}
</style>