<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="main-title">Energia solar</h1>
      <p class="subtitle">Enquanto o sol brilha, você economiza!</p>
      <button class="btn-cta">ENTRE EM CONTATO CONOSCO</button>
    </div>
    <div class="scroll-indicator">
      <p>Conheça a MRT Energia Solar</p>
      <span class="arrow">&or;</span>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  color: white;
  background-image: linear-gradient(rgba(0, 17, 46, 0.85), rgba(0, 17, 46, 0.85)),
    url('/bg.jpg');
  background-size: cover;
  background-position: center;
}

.hero-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-title {
  font-size: 5rem;
  color: var(--light-orange);
  background-image: linear-gradient(to right, var(--dark-orange), var(--light-orange));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: 900;
}

.subtitle {
  font-size: 2.5rem;
  margin: 1rem 0 2.5rem;
  font-weight: 500;
}

.btn-cta {
  background-image: linear-gradient(to right, var(--dark-orange), var(--light-orange));
  color: var(--dark-blue);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-cta:hover {
  background-image: linear-gradient(to left, var(--dark-orange), var(--light-orange));
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(243, 156, 18, 0.4);
}

.scroll-indicator {
  padding-bottom: 2rem;
  font-weight: bold;
}

.scroll-indicator .arrow {
  font-size: 2rem;
  color: var(--dark-orange);
  display: block;
  margin-top: 0.5rem;
}
</style>