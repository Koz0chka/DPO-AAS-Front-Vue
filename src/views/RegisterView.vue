<template>
  <div class="register-page min-vh-100 d-flex flex-column">

    <header class="register-header position-fixed top-0 start-0 m-4" style="z-index: 100;">
      <router-link to="/" class="back-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>На главную</span>
      </router-link>
    </header>

    <main class="register-content flex-grow-1 d-flex align-items-center justify-content-center p-4 pt-5">
      
      <div class="register-card card-custom p-5" style="max-width: 500px; width: 100%;">
        
        <div class="text-center mb-4">
          <div class="register-logo mb-3">
            <span class="logo-dpo">DPO</span>
            <span class="logo-aas">AAS</span>
            <span class="logo-ai">AI</span>
          </div>
          <h1 class="h4 fw-semibold">Создание аккаунта</h1>
          <p class="text-secondary">Зарегистрируйтесь для доступа к аналитике</p>
        </div>
        
        <form @submit.prevent="handleSubmit" novalidate>

          <div class="mb-3">
            <label for="fullname" class="form-label">
              ФИО <span class="text-danger">*</span>
            </label>
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <input 
                type="text" 
                id="fullname" 
                v-model="form.fullname"
                class="form-control border-start-0"
                :class="{ 'is-invalid': errors.fullname }"
                placeholder="Иванов Иван Иванович"
              >
            </div>
            <div v-if="errors.fullname" class="invalid-feedback d-block">
              {{ errors.fullname }}
            </div>
            <small v-else class="text-muted">Введите фамилию, имя и отчество</small>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Email <span class="text-danger">*</span>
            </label>
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                class="form-control border-start-0"
                :class="{ 'is-invalid': errors.email }"
                placeholder="example@company.ru"
              >
            </div>
            <div v-if="errors.email" class="invalid-feedback d-block">
              {{ errors.email }}
            </div>
            <small v-else class="text-muted">Корпоративный email для доступа</small>
          </div>

          <div class="mb-3">
            <label for="phone" class="form-label">
              Телефон <span class="text-danger">*</span>
            </label>
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone"
                @input="formatPhone"
                class="form-control border-start-0"
                :class="{ 'is-invalid': errors.phone }"
                placeholder="+7 (999) 123-45-67"
              >
            </div>
            <div v-if="errors.phone" class="invalid-feedback d-block">
              {{ errors.phone }}
            </div>
            <small v-else class="text-muted">Формат: +7 (XXX) XXX-XX-XX</small>
          </div>

          <div class="mb-3">
            <label for="company" class="form-label">Компания</label>
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </span>
              <input 
                type="text" 
                id="company" 
                v-model="form.company"
                class="form-control border-start-0"
                placeholder="Название компании"
              >
            </div>
            <small class="text-muted">Необязательно</small>
          </div>

          <div class="mb-4">
            <div class="form-check">
              <input 
                type="checkbox" 
                id="agreement" 
                v-model="form.agreement"
                class="form-check-input"
                :class="{ 'is-invalid': errors.agreement }"
              >
              <label for="agreement" class="form-check-label">
                Я согласен на <a href="#" class="text-decoration-none">обработку персональных данных</a>
              </label>
              <div v-if="errors.agreement" class="invalid-feedback d-block">
                {{ errors.agreement }}
              </div>
            </div>
          </div>

          <div class="d-flex gap-3">
            <button type="submit" class="btn btn-primary-custom flex-grow-1">
              <span>Зарегистрироваться</span>
            </button>
            <button type="reset" class="btn btn-outline-secondary" @click="resetForm">
              Очистить
            </button>
          </div>
          
        </form>
        
        <div class="text-center mt-4 pt-3 border-top">
          <p class="text-secondary mb-0">
            Уже есть аккаунт? 
            <router-link to="/profile" class="text-decoration-none">Войти</router-link>
          </p>
        </div>
        
      </div>
      
    </main>
    
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  fullname: '',
  email: '',
  phone: '',
  company: '',
  agreement: false
})

const errors = reactive({
  fullname: '',
  email: '',
  phone: '',
  agreement: ''
})

const patterns = {
  fullname: /^[а-яёА-ЯЁa-zA-Z\s\-]+$/,
  phone: /^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

function formatPhone() {
  let value = form.phone.replace(/\D/g, '')
  if (value.length > 11) value = value.slice(0, 11)
  
  let formatted = ''
  if (value.length > 0) {
    formatted = value[0] === '8' ? '+7' : '+' + value[0]
    if (value.length > 1) formatted += ' (' + value.slice(1, 4)
    if (value.length > 4) formatted += ') ' + value.slice(4, 7)
    if (value.length > 7) formatted += '-' + value.slice(7, 9)
    if (value.length > 9) formatted += '-' + value.slice(9, 11)
  }
  form.phone = formatted
}

function validate() {
  let isValid = true

  Object.keys(errors).forEach(key => errors[key] = '')

  const fullnameWords = form.fullname.trim().split(/\s+/).filter(w => w.length > 0)
  if (!form.fullname.trim()) {
    errors.fullname = 'Введите ФИО'
    isValid = false
  } else if (!patterns.fullname.test(form.fullname)) {
    errors.fullname = 'ФИО должно содержать только буквы'
    isValid = false
  } else if (fullnameWords.length < 2) {
    errors.fullname = 'Введите минимум фамилию и имя'
    isValid = false
  } else if (fullnameWords.length > 3) {
    errors.fullname = 'Максимум 3 слова'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Введите email'
    isValid = false
  } else if (!patterns.email.test(form.email)) {
    errors.email = 'Введите корректный email'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = 'Введите номер телефона'
    isValid = false
  } else if (!patterns.phone.test(form.phone)) {
    errors.phone = 'Формат: +7 (XXX) XXX-XX-XX'
    isValid = false
  }

  if (!form.agreement) {
    errors.agreement = 'Необходимо согласие'
    isValid = false
  }
  
  return isValid
}

function handleSubmit() {
  if (!validate()) {
    console.group('Ошибки валидации')
    Object.entries(errors).forEach(([key, value]) => {
      if (value) console.error(`${key}: ${value}`)
    })
    console.groupEnd()
    return
  }
  
  const userData = {
    fullname: form.fullname.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    company: form.company.trim(),
    registeredAt: new Date().toISOString()
  }

  console.clear()
  console.log('%cРегистрация успешна!', 'color: #10b981; font-size: 18px; font-weight: bold;')
  console.table({
    'ФИО': userData.fullname,
    'Email': userData.email,
    'Телефон': userData.phone,
    'Компания': userData.company || '(не указана)'
  })
  console.log('Время:', new Date().toLocaleString('ru-RU'))

  userStore.register(userData)

  setTimeout(() => {
    router.push('/profile')
  }, 500)
}

function resetForm() {
  form.fullname = ''
  form.email = ''
  form.phone = ''
  form.company = ''
  form.agreement = false
  Object.keys(errors).forEach(key => errors[key] = '')
}
</script>

<style scoped>
.register-logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.8rem;
  font-weight: 600;
}

.input-group-text {
  border-color: rgba(0, 0, 0, 0.1);
}

.form-control {
  border-color: rgba(0, 0, 0, 0.1);
}

.form-control:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 0.2rem rgba(0, 120, 231, 0.15);
}
</style>