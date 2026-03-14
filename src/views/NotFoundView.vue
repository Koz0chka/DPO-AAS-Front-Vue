<template>
  <div class="not-found-page min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
    
    <div class="error-code text-white mb-4" style="font-family: 'JetBrains Mono', monospace; font-size: 8rem; font-weight: 700; text-shadow: 0 4px 20px rgba(0,0,0,0.2);">
      404
    </div>
    
    <div class="error-monolith position-relative d-flex align-items-center">
      
      <div class="error-planks d-flex">
        
        <div class="error-plank error-plank-left text-end">
          <h3 class="h6 fw-semibold">Страница не найдена</h3>
          <p class="small text-muted mb-0">Возможно, она была удалена</p>
        </div>
        
        <router-link to="/" class="error-circle position-absolute start-50 top-50 translate-middle d-flex flex-column align-items-center justify-content-center text-decoration-none text-dark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span class="small fw-semibold">На главную</span>
        </router-link>
        
        <div class="error-plank error-plank-right">
          <h3 class="h6 fw-semibold">Нужна помощь?</h3>
          <a href="mailto:hello@dpoaas.ai" class="text-primary text-decoration-none small">Связаться с нами</a>
        </div>
        
      </div>
      
    </div>
    
  </div>
</template>

<script setup>
</script>

<style scoped>
.error-planks {
  gap: 0;
}

.error-plank {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 1.5rem 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.error-plank-left {
  border-radius: 30px 0 0 30px;
}

.error-plank-right {
  border-radius: 0 30px 30px 0;
}

.error-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.2s;
}

.error-circle:hover {
  box-shadow: 0 20px 50px rgba(77, 166, 255, 0.25);
  transform: translate(-50%, -50%) scale(1.05);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
  
  .error-planks {
    flex-direction: column;
    gap: 0;
  }
  
  .error-plank-left {
    border-radius: 30px 30px 0 0;
  }
  
  .error-plank-right {
    border-radius: 0 0 30px 30px;
  }
  
  .error-circle {
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    width: 80px;
    height: 80px;
    margin: -40px 0;
  }
}
</style>