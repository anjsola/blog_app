<template>
  <nav class="navbar">
    <div class="logo">Jola’s Blog</div>

    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/articles">Articles</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </nav>
</template>

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

.signup {
  background: #e9e5de;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
}
</style>