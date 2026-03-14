<template>
  <footer class="project-footer position-fixed bottom-0 start-0 end-0 d-flex justify-content-center" style="z-index: 50;">
    <div class="footer-monolith d-flex align-items-end justify-content-center position-relative">

      <div class="footer-plank footer-plank-left" @click="$emit('export')">
        <div class="d-flex align-items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <span>Экспорт</span>
        </div>
      </div>

      <div class="footer-plank footer-plank-right" @click="$emit('save')">
        <div class="d-flex align-items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <span>Сохранить</span>
        </div>
      </div>

      <div class="half-wheel position-absolute">
        <div class="half-wheel-inner d-flex gap-2">
          <button class="wheel-btn" @click="$emit('add')" title="Добавить">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <button class="wheel-btn" @click="$emit('refresh')" title="Обновить">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
          </button>
          <button class="wheel-btn" @click="$emit('filter')" title="Фильтры">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
defineEmits(['export', 'save', 'add', 'refresh', 'filter'])
</script>

<style scoped>
.footer-monolith {
  max-width: 900px;
}

.footer-plank {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  padding: 1.1rem 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  z-index: 1;
}

.footer-plank:hover {
  color: var(--accent-primary);
}

.footer-plank-left {
  border-radius: 32px 0 0 0;
  padding-right: 5.5rem;
}

.footer-plank-right {
  border-radius: 0 32px 0 0;
  padding-left: 5.5rem;
}

.half-wheel {
  width: 300px;
  height: 150px;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 150px 150px 0 0;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);
  bottom: -50px;
  z-index: 2;
}

.half-wheel-inner {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
}

.wheel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.wheel-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  background: rgba(0, 120, 231, 0.1);
}
</style>