<template>
  <section class="hero">
    <div class="left">
      <p class="tag">SOFTWARE ENGINEER IN PROGRESS</p>

      <h1>
        Journey of a builder <br />
        learning in public
      </h1>

      <p class="desc">
        Hello! My name is Solaja Anjola.
        I am an aspiring software Engineer.
        This is my personal blog, where I write about the code I ship,
        the mistakes I make and everything in between.
      </p>

      <div class="buttons">
        <button class="primary">Sign up now!</button>
        <button class="secondary">Github</button>
        <a href="#">Read about me</a>
      </div>
    </div>

    <div class="right">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 60px;
  background: linear-gradient(to right, #0f2d26, #123c32);
  color: white;
}

.left {
  max-width: 550px;
}

.tag {
  font-size: 12px;
  letter-spacing: 1px;
  color: #6ee7b7;
  margin-bottom: 10px;
}

h1 {
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;
}

.desc {
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.primary {
  background: #6ee7b7;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  cursor: pointer;
}

.secondary {
  background: transparent;
  border: 1px solid #ccc;
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
}

.right img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 50%;
}
</style>