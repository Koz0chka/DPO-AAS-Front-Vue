<template>
  <div class="faq-page scroll-container">

    <header class="faq-header position-fixed top-0 start-0 m-4" style="z-index: 100;">
      <router-link to="/" class="back-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>На главную</span>
      </router-link>
    </header>

    <section class="section d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
      <div class="text-center">
        <h1 class="display-4 text-white mb-3" style="text-shadow: 0 2px 10px rgba(0,0,0,0.2);">Частые вопросы</h1>
        <p class="lead text-white opacity-75">Всё, что нужно знать о DPO-AAS-AI</p>
      </div>
      <div class="scroll-indicator position-absolute bottom-0 mb-5 text-center text-white opacity-50">
        <span class="d-block mb-2">Листайте вниз</span>
        <div class="arrow-down mx-auto" style="width: 24px; height: 24px; border-left: 2px solid white; border-bottom: 2px solid white; transform: rotate(-45deg);"></div>
      </div>
    </section>

    <section class="section d-flex align-items-center justify-content-center min-vh-100 p-4">
      <div class="section-content" style="max-width: 900px; width: 100%;">
        <h2 class="section-title text-white text-center mb-5">Начало работы</h2>
        <div class="d-flex flex-column gap-3">
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Какие форматы данных поддерживаются?</h3>
            <p class="text-secondary mb-0">CSV, Excel, JSON, Parquet, а также прямые подключения к PostgreSQL, MySQL, ClickHouse, MongoDB и 50+ другим источникам данных.</p>
          </div>
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Нужно ли обучать модель?</h3>
            <p class="text-secondary mb-0">Нет, наш ИИ работает сразу "из коробки". Он автоматически адаптируется под структуру ваших данных и типы показателей.</p>
          </div>
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Можно ли попробовать бесплатно?</h3>
            <p class="text-secondary mb-0">Да, у нас есть бесплатный тариф на 100 000 строк в месяц без ограничения по времени использования.</p>
          </div>
          
        </div>
      </div>
    </section>

    <section class="section d-flex align-items-center justify-content-center min-vh-100 p-4">
      <div class="section-content" style="max-width: 900px; width: 100%;">
        <h2 class="section-title text-white text-center mb-5">Безопасность и интеграции</h2>
        <div class="d-flex flex-column gap-3">
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Как обеспечивается безопасность?</h3>
            <p class="text-secondary mb-0">Шифрование AES-256, SSL/TLS, двухфакторная аутентификация, ролевая модель доступа и полный аудит действий.</p>
          </div>
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Можно ли развернуть на своих серверах?</h3>
            <p class="text-secondary mb-0">Да, для Enterprise-тарифа доступен On-premise вариант. Предоставляем Docker-образы и поддержку.</p>
          </div>
          
          <div class="card-custom p-4">
            <h3 class="h5 fw-semibold mb-2">Какие интеграции доступны?</h3>
            <p class="text-secondary mb-0">Более 50 интеграций: PostgreSQL, MySQL, BigQuery, Snowflake, Google Analytics, Яндекс.Метрика и др.</p>
          </div>
          
        </div>
      </div>
    </section>

    <section class="section d-flex align-items-center justify-content-center min-vh-100 p-4">
      <div class="section-content" style="max-width: 1000px; width: 100%;">
        <h2 class="section-title text-white text-center mb-5">Контакты</h2>
        
        <div class="row g-4 mb-4">
          <div class="col-md-4">
            <div class="card-custom p-4 text-center h-100">
              <div class="contact-icon mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 class="h6 fw-semibold mb-2">Email</h3>
              <a href="mailto:hello@dpoaas.ai" class="text-primary text-decoration-none">hello@dpoaas.ai</a>
              <p class="small text-muted mt-2 mb-0">Ответим за 24 часа</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card-custom p-4 text-center h-100">
              <div class="contact-icon mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="h6 fw-semibold mb-2">Телефон</h3>
              <a href="tel:+79991234567" class="text-primary text-decoration-none">+7 (999) 123-45-67</a>
              <p class="small text-muted mt-2 mb-0">Пн-Пт 10:00-19:00 МСК</p>
            </div>
          </div>
          
          <div class="col-md-4">
            <div class="card-custom p-4 text-center h-100">
              <div class="contact-icon mx-auto mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 class="h6 fw-semibold mb-2">Поддержка</h3>
              <a href="mailto:support@dpoaas.ai" class="text-primary text-decoration-none">support@dpoaas.ai</a>
              <p class="small text-muted mt-2 mb-0">Технические вопросы</p>
            </div>
          </div>
        </div>
        
        <div class="d-flex justify-content-center gap-3 flex-wrap">
          <a href="#" class="btn btn-light rounded-pill px-4">Telegram</a>
          <a href="https://github.com/Koz0chka/DPO-AAS-Front" target="_blank" class="btn btn-light rounded-pill px-4">GitHub</a>
          <a href="#" class="btn btn-light rounded-pill px-4">VK</a>
        </div>
        
      </div>
    </section>

    <section class="section d-flex align-items-center justify-content-center min-vh-100 p-4">
      <div class="card-custom p-5 text-center" style="max-width: 600px;">
        <div class="mb-3" style="font-family: 'JetBrains Mono', monospace; font-size: 1.8rem; font-weight: 600;">
          <span class="logo-dpo">DPO</span>
          <span class="logo-aas">AAS</span>
          <span class="logo-ai">AI</span>
        </div>
        <p class="text-muted mb-3">© 2025 DPO-AAS-AI. Все права защищены.</p>
        <div class="d-flex justify-content-center gap-4">
          <router-link to="/" class="text-primary text-decoration-none">Главная</router-link>
          <router-link to="/profile" class="text-primary text-decoration-none">Проекты</router-link>
          <router-link to="/faq" class="text-primary text-decoration-none">FAQ</router-link>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
})
</script>

<style scoped>
.scroll-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

.section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

@media (max-width: 768px) {
  .scroll-container {
    scroll-snap-type: none;
    height: auto;
    overflow-y: auto;
  }
  
  .section {
    scroll-snap-align: none;
    min-height: 100vh;
    padding: 5rem 1rem;
  }
  
  .scroll-indicator {
    display: none;
  }
}
</style>