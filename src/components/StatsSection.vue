<template>
  <div
    class="stats-wrapper"
    ref="statsSectionRef"
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
    <section class="stats-section">
      <div class="title-container">
        <h2>
          Conheça a MRT
          <span class="highlight">Energia Solar</span>
        </h2>
      </div>

      <div class="stats-container">
        <div
          v-for="stat in stats"
          :key="stat.description"
          class="stat-item"
        >
          <p class="prefix">Mais de</p>
          <p class="number">{{ Math.floor(stat.animatedValue) }}</p>
          <p class="description">{{ stat.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const stats = reactive([
  { description: 'projetos homologados', finalValue: 2500, animatedValue: 0 },
  { description: 'Empresas em suporte', finalValue: 70, animatedValue: 0 },
  { description: 'franquias em 5 estados', finalValue: 14, animatedValue: 0 },
  { description: 'Colaboradores', finalValue: 70, animatedValue: 0 },
])

const animateNumber = (stat, duration = 1000) => {
  const startTime = performance.now()
  const update = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    stat.animatedValue = progress * stat.finalValue
    if (progress < 1) {
      requestAnimationFrame(update)
    } else {
      stat.animatedValue = stat.finalValue
    }
  }
  requestAnimationFrame(update)
}

const statsSectionRef = ref(null)
let observer

onMounted(() => {
  const options = { threshold: 0.5 }
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      stats.forEach(stat => animateNumber(stat))
      observer.disconnect()
    }
  }, options)

  if (statsSectionRef.value) {
    observer.observe(statsSectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.stats-wrapper {
  background-color: #fff;
  padding: 4rem 2rem
}

.stats-section {
  max-width: 1200px;
  margin: 0 auto;
  background-color: var(--dark-blue);
  color: #fff;
  border-radius: 25px;
  padding: 2.5rem 3.5rem;
  display: flex;
  align-items: center;
  gap: 3rem
}

.title-container {
  flex-basis: 30%
}

.title-container h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4
}

.title-container .highlight {
  display: block;
  position: relative;
  padding-bottom: 8px
}

.title-container .highlight::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: var(--dark-orange)
}

.stats-container {
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 1rem
}

.stat-item {
  text-align: center
}

.stat-item .prefix {
  margin: 0;
  font-size: 1rem;
  color: #fff
}

.stat-item .number {
  margin: .5rem 0;
  font-size: 4rem;
  font-weight: 700;
  color: var(--dark-orange);
  line-height: 1
}

.stat-item .description {
  margin: 0;
  font-size: 1rem;
  color: #fff
}
</style>