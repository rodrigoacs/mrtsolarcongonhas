<template>
  <section
    class="clients-section"
    id="clients"
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
      <div class="section-header">
        <h3 class="subtitle">Confiança e Qualidade</h3>
        <h2 class="title">Nossos Clientes e Parceiros</h2>
        <p class="description">
          Temos o orgulho de colaborar com empresas de diversos portes, entregando sempre a máxima eficiência e
          qualidade em cada projeto.
        </p>
      </div>

      <div class="featured-clients">
        <div
          v-for="(client, index) in featuredClients"
          :key="client.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100 * (index + 1),
              duration: 500,
            },
          }"
          class="client-logo"
        >
          <img
            :src="client.logoUrl"
            :alt="client.name"
          />
        </div>
      </div>

      <div class="project-gallery">
        <button
          v-for="(project, index) in projects"
          :key="project.title"
          @click="openModal(project)"
          class="project-card"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100 * (index + 1) + 500,
              duration: 500,
            },
          }"
        >
          <img
            :src="project.images[0]"
            :alt="project.title"
            class="project-image"
          />
          <div class="project-overlay">
            <h4 class="project-title">{{ project.title }}</h4>
          </div>
        </button>
      </div>
    </div>
  </section>

  <ProjectModal
    :show="isModalVisible"
    :project="selectedProject"
    @close="closeModal"
  />
</template>

<script setup>
import { ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

const featuredClients = ref([
  { name: 'Dallon', logoUrl: '/logos/dallon.png' },
  { name: 'Enel', logoUrl: '/logos/enel.webp' },
  { name: 'Equatorial', logoUrl: '/logos/equatorial.svg' },
  { name: 'GSP', logoUrl: '/logos/gsp.svg' },
  { name: 'Unimed', logoUrl: '/logos/unimed.png' },
  { name: 'Volvo', logoUrl: '/logos/volvo.png' },
])

const projects = ref([
  {
    title: 'Projeto Residencial Alfa',
    images: [
      'https://placehold.co/800x600/00112E/FFF?text=Projeto+Alfa+1',
      'https://placehold.co/800x600/00112E/FFF?text=Projeto+Alfa+2',
      'https://placehold.co/800x600/00112E/FFF?text=Projeto+Alfa+3'
    ],
    description: 'Descrição detalhada do Projeto Residencial Alfa. Foco em sustentabilidade e design moderno, utilizando painéis de alta eficiência para maximizar a economia de energia.'
  },
  {
    title: 'Comércio Beta',
    images: [
      'https://placehold.co/800x600/F9710E/FFF?text=Comércio+Beta+1',
      'https://placehold.co/800x600/F9710E/FFF?text=Comércio+Beta+2'
    ],
    description: 'Instalação fotovoltaica para o Comércio Beta, reduzindo os custos operacionais e reforçando a imagem de uma empresa ecologicamente consciente.'
  },
])

const isModalVisible = ref(false)
const selectedProject = ref({})

const openModal = (project) => {
  selectedProject.value = project
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}
</script>

<style scoped>
.clients-section {
  background-color: var(--dark-blue);
  color: #ffffff;
  padding: 6rem 2rem;
  overflow: hidden;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-header {
  margin-bottom: 4rem;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--dark-orange);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0.5rem 0 1rem;
  color: #f1f1f1;
}

.description {
  font-size: 1.1rem;
  color: #d1d5db;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.featured-clients {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin-bottom: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.client-logo {
  width: 160px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.8);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.client-logo:hover img {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  transform: scale(1.1);
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  text-align: left;
  display: block;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 17, 46, 0.9) 0%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.project-title {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}
</style>