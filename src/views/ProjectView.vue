<template>
  <div class="project-page">

    <header class="project-header">
      <router-link to="/profile" class="back-link">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>К проектам</span>
      </router-link>
      
      <div class="project-title-group">
        <h1 class="project-title">{{ projectData.name }}</h1>
        <span class="project-badge">{{ projectData.meta }}</span>
      </div>
      
      <div class="header-actions">
        <button class="icon-btn" title="Настройки">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>
        <button class="icon-btn" title="Поделиться">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </header>

    <main class="project-main">
      
      <div class="dashboard-grid">

        <div class="dash-card dash-card-large">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Динамика продаж</h3>
            <button class="dash-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div class="dash-card-body">
            <canvas ref="chart1Canvas"></canvas>
          </div>
          <div class="dash-card-footer">
            <span class="text-success fw-medium">+23% к прошлому кварталу</span>
          </div>
        </div>

        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Конверсия</h3>
          </div>
          <div class="dash-card-body dash-card-body-center">
            <div class="big-metric">12.4%</div>
            <span class="text-success">+2.1%</span>
          </div>
        </div>
        
        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Активность</h3>
          </div>
          <div class="dash-card-body">
            <canvas ref="chart2Canvas"></canvas>
          </div>
        </div>
        
        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">Каналы</h3>
          </div>
          <div class="dash-card-body">
            <canvas ref="chart3Canvas"></canvas>
          </div>
        </div>
        
        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">География</h3>
          </div>
          <div class="dash-card-body">
            <canvas ref="chart4Canvas"></canvas>
          </div>
        </div>
        
        <div class="dash-card">
          <div class="dash-card-header">
            <h3 class="dash-card-title">ИИ-инсайты</h3>
          </div>
          <div class="dash-card-body">
            <div class="insights-list">
              <div class="insight-item insight-positive">
                <span class="insight-icon">↑</span> Рост конверсии в выходные на 34%
              </div>
              <div class="insight-item insight-warning">
                <span class="insight-icon">!</span> Аномалия: падение трафика 15-17
              </div>
              <div class="insight-item insight-info">
                <span class="insight-icon">→</span> Рекомендация: увеличить бюджет
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </main>

    <footer class="project-footer">
      <div class="footer-monolith">

        <div class="footer-planks-container">

          <div class="footer-plank-left-wrapper">
            <div class="footer-plank footer-plank-left" @click="handleAction('export')">
              <div class="footer-plank-inner">
                <svg width="180" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span>Экспорт</span>
              </div>
            </div>
          </div>
 
          <div class="footer-plank-right-wrapper">
            <div class="footer-plank footer-plank-right" @click="handleAction('save')">
              <div class="footer-plank-inner">
                <svg width="180" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                <span>Сохранить</span>
              </div>
            </div>
          </div>
          
        </div>

        <div class="half-wheel">
          <div class="half-wheel-inner">
            <button class="wheel-btn" @click="handleAction('add')" title="Добавить график">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button class="wheel-btn" @click="handleAction('refresh')" title="Обновить">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </button>
            <button class="wheel-btn" @click="handleAction('filter')" title="Фильтры">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
        
      </div>
    </footer>
    
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Chart from 'chart.js/auto'

const route = useRoute()

const chart1Canvas = ref(null)
const chart2Canvas = ref(null)
const chart3Canvas = ref(null)
const chart4Canvas = ref(null)

const projectData = reactive({
  id: route.params.id || 1,
  name: 'Маркетинг Q1',
  meta: 'ROI +156%'
})

let charts = []

const chartData = {
  sales: {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
    datasets: [
      {
        label: 'Продажи',
        data: [120, 145, 132, 178, 195, 220],
        borderColor: '#0078e7',
        backgroundColor: 'rgba(0, 120, 231, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'План',
        data: [130, 140, 150, 160, 170, 180],
        borderColor: '#10b981',
        borderDash: [5, 5],
        fill: false,
        tension: 0.4
      }
    ]
  },
  activity: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    data: [65, 78, 90, 81, 56, 95, 88]
  },
  channels: {
    labels: ['Organic', 'Paid', 'Social', 'Referral'],
    data: [35, 28, 22, 15]
  },
  geo: {
    labels: ['Москва', 'СПб', 'Казань', 'Екатеринбург'],
    data: [4500, 2800, 1200, 980]
  }
}

onMounted(() => {
  initCharts()
})

function initCharts() {
  Chart.defaults.font.family = "'Space Grotesk', sans-serif"
  Chart.defaults.color = '#4a4a4a'
  
  if (chart1Canvas.value) {
    charts.push(new Chart(chart1Canvas.value, {
      type: 'line',
      data: chartData.sales,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true } }
      }
    }))
  }
  
  if (chart2Canvas.value) {
    charts.push(new Chart(chart2Canvas.value, {
      type: 'bar',
      data: {
        labels: chartData.activity.labels,
        datasets: [{
          data: chartData.activity.data,
          backgroundColor: 'rgba(0, 120, 231, 0.7)',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { display: false }, x: { grid: { display: false } } }
      }
    }))
  }
  
  if (chart3Canvas.value) {
    charts.push(new Chart(chart3Canvas.value, {
      type: 'doughnut',
      data: {
        labels: chartData.channels.labels,
        datasets: [{
          data: chartData.channels.data,
          backgroundColor: ['#0078e7', '#10b981', '#f59e0b', '#8b5cf6']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%'
      }
    }))
  }
  
  if (chart4Canvas.value) {
    charts.push(new Chart(chart4Canvas.value, {
      type: 'bar',
      data: {
        labels: chartData.geo.labels,
        datasets: [{
          data: chartData.geo.data,
          backgroundColor: [
            'rgba(0, 120, 231, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(139, 92, 246, 0.8)'
          ],
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { grid: { display: false } } }
      }
    }))
  }
}

function handleAction(action) {
  switch(action) {
    case 'add': alert('Добавление графика'); break
    case 'refresh': console.log('Данные обновлены'); break
    case 'filter': alert('Фильтры'); break
    case 'export': alert('Экспорт данных'); break
    case 'save': alert('Проект сохранён'); break
  }
}
</script>

<style scoped>
.project-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
}

.project-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
}

.project-title-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.project-badge {
  background: white;
  color: var(--accent-primary);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.project-main {
  flex: 1;
  padding: 6rem 2rem 220px;
  overflow-y: auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  max-width: 1400px;
  margin: 0 auto;
}

.dash-card {
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dash-card:hover {
  border-color: var(--border-hover);
}

.dash-card-large {
  grid-column: span 2;
  grid-row: span 2;
}

.dash-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dash-card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.dash-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.dash-btn:hover {
  color: var(--accent-primary);
}

.dash-card-body {
  flex: 1;
  padding: 1rem;
  min-height: 150px;
}

.dash-card-body-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dash-card-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.big-metric {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
}

.insights-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.insight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.85rem;
  padding: 0.6rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.03);
}

.insight-positive {
  border-left: 3px solid var(--accent-success);
  color: var(--accent-success);
}

.insight-warning {
  border-left: 3px solid var(--accent-warning);
  color: var(--accent-warning);
}

.insight-info {
  border-left: 3px solid var(--accent-primary);
  color: var(--accent-primary);
}

.project-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.footer-monolith {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  pointer-events: auto;
  width: 100%;
  max-width: 100%;
}

.footer-planks-container {
  display: flex;
  width: 100%;
  max-width: 900px;
}

.footer-plank-left-wrapper,
.footer-plank-right-wrapper {
  flex: 1;
  display: flex;
}

.footer-plank-left-wrapper {
  justify-content: flex-start;
}

.footer-plank-right-wrapper {
  justify-content: flex-end;
}

.footer-plank {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
  padding: 1.1rem 1.5rem;
  z-index: 1;
}

.footer-plank:hover {
  border-color: var(--border-hover);
  background: white;
}

.footer-plank-left {
  border-radius: 32px 0 0 0;
  padding-right: 5.5rem;
}

.footer-plank-right {
  border-radius: 0 32px 0 0;
  padding-left: 5.5rem;
}

.footer-plank-inner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
}

.footer-plank:hover .footer-plank-inner {
  color: var(--accent-primary);
}

.half-wheel {
  width: 300px;
  height: 150px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 150px 150px 0 0;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
  border-bottom: none;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: border-color 0.2s;
}

.half-wheel:hover {
  border-color: var(--border-hover);
}

.half-wheel-inner {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.75rem;
}

.wheel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.wheel-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  background: rgba(0, 120, 231, 0.1);
  transform: translateY(-3px);
}

@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .dash-card-large {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  .dash-card-large {
    grid-column: span 1;
  }
  .project-main {
    padding: 5rem 1rem 180px;
  }
  
  .footer-planks-container {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
  
  .footer-plank-left-wrapper,
  .footer-plank-right-wrapper {
    justify-content: center;
  }
  
  .footer-plank-left {
    border-radius: 32px 32px 0 0;
    padding: 1rem 1.5rem;
  }
  
  .footer-plank-right {
    border-radius: 0 0 32px 32px;
    padding: 1rem 1.5rem;
  }
  
  .half-wheel {
    width: 220px;
    height: 110px;
    border-radius: 110px 110px 0 0;
    bottom: -35px;
    position: relative;
    left: auto;
    transform: none;
  }
  
  .half-wheel-inner {
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .wheel-btn {
    width: 42px;
    height: 42px;
  }
}

@media (max-width: 480px) {
  .half-wheel {
    width: 180px;
    height: 90px;
    border-radius: 90px 90px 0 0;
    bottom: -30px;
  }
  
  .half-wheel-inner {
    bottom: 40px;
  }
  
  .wheel-btn {
    width: 36px;
    height: 36px;
  }
  
  .footer-plank {
    padding: 0.9rem 1rem;
  }
  
  .footer-plank-inner {
    font-size: 0.8rem;
  }
}
</style>