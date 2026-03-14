<template>
  <div class="monolith">

    <div class="planks-container">

      <div class="plank-left-wrapper">
        <div class="plank plank-left">
          <div class="plank-content">
            <h3 class="plank-title">Документация</h3>
            <p class="plank-text">SDK для Python, JavaScript и R. Примеры кода, API Reference и руководства.</p>
            <router-link to="/faq" class="plank-link">
              <span>Узнать больше</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <div class="plank-right-wrapper">
        <div class="plank plank-right">
          <div class="plank-content">
            <h3 class="plank-title">О компании</h3>
            <p class="plank-text">Автоматический анализ, предиктивная аналитика и дашборды в реальном времени.</p>
            <router-link to="/faq" class="plank-link">
              <span>Узнать больше</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
  
    <div class="circle-overlay">
      <router-link 
        :to="destination" 
        class="hero-circle"
      >
        <div class="circle-content">
          <div class="circle-logo">
            <span class="logo-dpo">DPO</span>
            <span class="logo-aas">AAS</span>
            <span class="logo-ai">AI</span>
          </div>
          <p class="circle-tagline">Анализ данных с ИИ</p>
          <div class="circle-cta">
            <span>{{ buttonText }}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const props = defineProps({
  buttonTitle: {
    type: String,
    default: 'Начать работу'
  }
})

const userStore = useUserStore()

const buttonText = computed(() => props.buttonTitle)

const destination = computed(() => {
  return userStore.isRegistered ? '/profile' : '/register'
})
</script>