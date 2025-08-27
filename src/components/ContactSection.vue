<template>
  <section
    class="contact-section"
    id="contact"
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
      <div class="info-container">
        <h3 class="subtitle">Fale Conosco</h3>
        <h2 class="title">Estamos prontos para o seu projeto</h2>
        <p class="description">
          Entre em contato através dos nossos canais de atendimento ou preencha o formulário ao lado para um orçamento
          sem compromisso.
        </p>
        <div class="contact-list">
          <a
            :href="socials.instagram.link"
            target="_blank"
            class="contact-item"
          >
            <span
              v-html="icons.instagram"
              class="contact-icon"
            ></span>
            <span class="contact-text">@mrtsolar.congonhas</span>
          </a>
          <a
            v-for="phone in phones"
            :key="phone"
            :href="`https://wa.me/${formatPhoneForWhatsApp(phone)}`"
            target="_blank"
            class="contact-item"
          >
            <span
              v-html="icons.phone"
              class="contact-icon"
            ></span>
            <span class="contact-text">{{ phone }}</span>
          </a>
        </div>
      </div>

      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="city">Cidade</label>
            <input
              type="text"
              id="city"
              v-model="formData.city"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea
              id="message"
              rows="5"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn-submit"
            :disabled="formStatus.submitting"
          >
            {{ formStatus.submitting ? 'A Enviar...' : 'Enviar Mensagem' }}
          </button>
          <p
            v-if="formStatus.successMessage"
            class="form-success"
          >{{ formStatus.successMessage }}</p>
          <p
            v-if="formStatus.errorMessage"
            class="form-error"
          >{{ formStatus.errorMessage }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const phones = ref(['+55 (31) 99999-1234', '+55 (31) 98888-5678'])
const icons = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640"><path fill="currentColor" d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 640"><path fill="currentColor" d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>`,
}
const socials = { instagram: { name: 'Instagram', link: 'https://www.instagram.com/mrtsolar.congonhas/', icon: icons.instagram }, }
const formData = reactive({ city: '', phone: '', message: '' })
const formatPhoneForWhatsApp = (phone) => phone.replace(/\D/g, '')

const formStatus = reactive({
  submitting: false,
  successMessage: '',
  errorMessage: '',
})

const handleSubmit = async () => {
  formStatus.submitting = true
  formStatus.successMessage = ''
  formStatus.errorMessage = ''

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      formStatus.successMessage = 'Obrigado! A sua mensagem foi enviada com sucesso.'
      formData.city = ''
      formData.phone = ''
      formData.message = ''
    } else {
      throw new Error('Ocorreu um problema ao enviar o formulário.')
    }
  } catch (error) {
    formStatus.errorMessage = 'Não foi possível enviar a sua mensagem. Por favor, tente novamente mais tarde.'
  } finally {
    formStatus.submitting = false
  }
}
</script>

<style scoped>
.form-success {
  margin-top: 1rem;
  color: #28a745;
  font-weight: 700;
  text-align: center;
}

.form-error {
  margin-top: 1rem;
  color: #dc3545;
  font-weight: 700
}

.contact-section {
  background-color: #fff;
  color: var(--dark-blue);
  padding: 6rem 2rem
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start
}

.info-container {
  text-align: left
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dark-orange);
  text-transform: uppercase;
  letter-spacing: 1px
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  margin: .5rem 0 1rem;
  line-height: 1.3
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 2.5rem
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color .3s ease
}

.contact-item:hover {
  color: var(--dark-orange)
}

.contact-icon {
  color: var(--dark-orange);
  display: flex;
  align-items: center
}

.form-container {
  background-color: #f7f9fc;
  padding: 2.5rem;
  border-radius: 15px
}

.form-group {
  margin-bottom: 1.5rem
}

.form-group label {
  display: block;
  margin-bottom: .5rem;
  font-weight: 700;
  color: var(--dark-blue)
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: .8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  transition: border-color .3s ease, box-shadow .3s ease
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--dark-orange);
  box-shadow: 0 0 0 3px rgba(249, 113, 14, .2)
}

textarea {
  resize: vertical
}

.btn-submit {
  width: 100%;
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

.btn-submit:hover {
  background-image: linear-gradient(to left, var(--dark-orange), var(--light-orange));
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(243, 156, 18, .4)
}
</style>