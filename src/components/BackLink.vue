<template>
  <router-link :to="to" class="back-link">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span><slot>Назад</slot></span>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.2s;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.back-link:hover {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}
</style>