<template>
  <header class="position-fixed top-0 start-0 end-0 d-flex justify-content-between align-items-center p-4" style="z-index: 100;">

    <router-link :to="backTo" class="back-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>{{ backText }}</span>
    </router-link>

    <div v-if="title" class="d-flex align-items-center gap-3">
      <h1 class="h5 mb-0 text-white fw-semibold">{{ title }}</h1>
      <span v-if="badge" class="badge bg-white text-primary rounded-pill px-3 py-2">{{ badge }}</span>
    </div>

    <div class="d-flex align-items-center gap-3">

      <slot name="actions"></slot>

      <div v-if="showUser" class="d-flex align-items-center gap-2">
        <div class="user-avatar">
          {{ userStore.initials }}
        </div>
        <span class="user-name">{{ userStore.fullName }}</span>
      </div>
      
    </div>
    
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const props = defineProps({
  backTo: {
    type: String,
    default: '/'
  },
  backText: {
    type: String,
    default: 'На главную'
  },
  title: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  showUser: {
    type: Boolean,
    default: false
  }
})

const userStore = useUserStore()
</script>

<style scoped>
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--accent-primary);
  font-family: 'JetBrains Mono', monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.user-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>