<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="show"
        class="modal-overlay"
        @click.self="$emit('close')"
      >
        <div
          class="modal-container"
          v-motion-pop
        >
          <button
            class="close-button"
            @click="$emit('close')"
          >&times;</button>

          <div class="modal-content">
            <div class="carousel-container">
              <button
                v-if="project.images && project.images.length > 1"
                @click="prevImage"
                class="nav-button prev"
              >&lt;</button>

              <div class="image-wrapper">
                <Transition
                  name="slide-fade"
                  mode="out-in"
                >
                  <img
                    v-if="project.images && project.images.length > 0"
                    :key="currentImageIndex"
                    :src="project.images[currentImageIndex]"
                    :alt="project.title"
                    class="modal-image"
                  />
                </Transition>
              </div>

              <button
                v-if="project.images && project.images.length > 1"
                @click="nextImage"
                class="nav-button next"
              >&gt;</button>
            </div>

            <div class="modal-text">
              <h2 class="modal-title">{{ project.title }}</h2>
              <p class="modal-description">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

const currentImageIndex = ref(0)

const nextImage = () => {
  if (props.project.images && props.project.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.project.images.length
  }
}

const prevImage = () => {
  if (props.project.images && props.project.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value - 1 + props.project.images.length) % props.project.images.length
  }
}

watch(() => props.project, () => {
  currentImageIndex.value = 0
})

const handleKeydown = (e) => {
  if (props.show) {
    if (e.key === 'Escape') emit('close')
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 17, 46, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  background-color: #ffffff;
  color: var(--dark-blue);
  border-radius: 15px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 350px;
  background-color: #eee;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 17, 46, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-button:hover {
  background-color: rgba(0, 17, 46, 0.8);
}

.nav-button.prev {
  left: 15px;
}

.nav-button.next {
  right: 15px;
}

.modal-text {
  padding: 2.5rem;
  overflow-y: auto;
}

.modal-title {
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 1rem;
  color: var(--dark-blue);
}

.modal-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 20;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.6);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>