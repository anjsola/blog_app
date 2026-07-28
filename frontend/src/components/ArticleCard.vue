<template>
  <div class="card">
    <img :src="image" />
    <div class="content">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String
})
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.content {
  padding: 15px;
}

h3 {
  font-size: 16px;
}
</style>