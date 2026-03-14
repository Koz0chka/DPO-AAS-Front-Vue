<template>
  <div class="card-custom p-4 mb-3">
    <h3 class="h6 fw-semibold mb-2">{{ question }}</h3>
    <p class="text-secondary mb-0">{{ answer }}</p>
  </div>
</template>

<script setup>
defineProps({
  question: String,
  answer: String
})
</script>

<style scoped>
.card-custom {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.2s;
}

.card-custom:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}
</style>