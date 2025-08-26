<template>
  <section
    class="about-section"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        ease: 'easeOut',
      },
    }"
  >
    <div class="content-wrapper">
      <div class="text-container">
        <h3 class="subtitle">Desde 2018 transformando o cenário energético</h3>
        <h2 class="title">
          Especialistas em instalação,
          <span class="highlight">operação e manutenção.</span>
        </h2>
        <p class="description">
          A MRT Engenharia e Energia Solar, fundada em junho de 2018, é especializada em sistemas fotovoltaicos. Nós
          cuidamos da instalação completa do seu sistema solar, desde o projeto elétrico e de fixação estrutural até a
          homologação junto à concessionária de energia.
        </p>
        <p class="description">
          Realizamos a instalação, oferecemos garantia, manutenção e assistência pós-instalação para garantir que tudo
          funcione perfeitamente. Nosso trabalho segue rigorosamente as normas técnicas, incluindo a NBR 5410 da ABNT.
        </p>
        <button class="btn-primary">Fale com um especialista</button>
      </div>
      <div class="image-container">
        <img
          src="/logo-blue.webp"
          alt="Equipe da MRT Energia Solar"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  background-color: #fff;
  color: var(--dark-blue);
  padding: 6rem 2rem
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 5rem
}

.text-container {
  flex-basis: 55%;
  text-align: left
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark-orange);
  margin-bottom: .5rem;
  text-transform: uppercase;
  letter-spacing: 1px
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
  line-height: 1.3
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: justify
}

.btn-primary {
  background-image: linear-gradient(to right, var(--dark-orange), var(--light-orange));
  color: var(--dark-blue);
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s ease;
  text-transform: uppercase
}

.btn-primary:hover {
  background-image: linear-gradient(to left, var(--dark-orange), var(--light-orange));
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(243, 156, 18, .4)
}

.image-container {
  flex-basis: 45%
}

.image-container img {
  width: 100%;
  border-radius: 15px;
  display: block
}
</style>