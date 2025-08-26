<template>
  <section
    class="services-section"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 800,
        ease: 'easeOut',
      },
    }"
  >
    <div class="content-wrapper">
      <div class="image-container">
        <img
          src="/bg-services.avif"
          alt="Instalação de painéis solares"
        />
      </div>
      <div class="text-container">
        <h2>Projetos e serviços</h2>
        <h3>Energia Solar</h3>
        <div class="lists-container">
          <ul>
            <li
              v-for="service in services"
              :key="service"
            >{{ service }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  'Instalações elétricas',
  'Iluminação cênica',
  'Loteamentos',
  'Subestação aérea',
  'Cabine primária',
  'Medição agrupada ou coletiva',
  'Correção de fator de potência',
  'SPDA',
  'Planejamento da obra, visando a necessidade do cliente',
  'Equipe própria de execução',
  'Acompanhamento de engenheiro em obra',
  'Emissão de ART'
])
</script>

<style scoped>
.services-section {
  background-color: var(--dark-blue);
  color: #ffffff;
  padding: 6rem 2rem;
  overflow: hidden;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.services-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.image-container {
  flex-basis: 40%;
}

.image-container img {
  width: 100%;
  border-radius: 10px;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.image-container img:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.text-container {
  flex-basis: 60%;
}

.text-container h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #f1f1f1;
}

.text-container h3 {
  font-size: 1.3rem;
  color: var(--dark-orange);
  margin-top: 0;
  margin-bottom: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.lists-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  column-count: 2;
  column-gap: 2.5rem;
}

.lists-container li {
  margin-bottom: 1.2rem;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
  color: #d1d5db;
  transition: color 0.3s ease, transform 0.3s ease;
  break-inside: avoid;
}

.lists-container li:hover {
  color: #ffffff;
  transform: translateX(5px);
}

.lists-container li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 6px;
  height: 12px;
  border: solid var(--dark-orange);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>