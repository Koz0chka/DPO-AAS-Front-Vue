<template>
  <div class="profile-page">
    
    <AppHeader back-to="/" back-text="На главную" :show-user="true" />
    
    <main class="profile-content">
      
      <div class="profile-monolith">

        <div class="profile-planks">

          <div class="profile-plank-left-wrapper">
            <div class="profile-plank profile-plank-left">
              <div class="profile-plank-content">
                <h3 class="profile-plank-title">Новый проект</h3>
                <p class="profile-plank-text">Загрузите данные и создайте новый дашборд с ИИ-аналитикой</p>
                <button class="btn btn-primary-custom" @click="createProject">Создать</button>
              </div>
            </div>
          </div>

          <div class="profile-plank-right-wrapper">
            <div class="profile-plank profile-plank-right">
              <div class="profile-plank-content">
                <h3 class="profile-plank-title">Поиск</h3>
                <p class="profile-plank-text">Быстрый поиск по всем проектам и дашбордам</p>
                <input 
                  type="text" 
                  v-model="searchQuery"
                  class="form-control rounded-pill"
                  placeholder="Найти..."
                >
              </div>
            </div>
          </div>
          
        </div>

        <ProjectWheel 
          :projects="projects"
          :search-query="searchQuery"
          @select="goToProject"
        />
        
      </div>
      
    </main>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import ProjectWheel from '@/components/ProjectWheel.vue'

const router = useRouter()
const searchQuery = ref('')

const projects = [
  { id: 1, name: 'Маркетинг Q1', meta: 'ROI +156%', gradient: 'linear-gradient(135deg, #00d4aa 0%, #0ea5e9 100%)' },
  { id: 2, name: 'Продажи 2024', meta: 'Выручка $2.4M', gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' },
  { id: 3, name: 'RFM-анализ', meta: '5 сегментов', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' },
  { id: 4, name: 'Когортный анализ', meta: 'LTV +34%', gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' },
  { id: 5, name: 'Аномалии', meta: '12 срабатываний', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
  { id: 6, name: 'Прогноз Q2', meta: '+23% рост', gradient: 'linear-gradient(135deg, #f472b6 0%, #c084fc 100%)' }
]

function goToProject(project) {
  router.push(`/project/${project.id}`)
}

function createProject() {
  alert('Создание нового проекта')
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.profile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 2rem;
}

.profile-monolith {
  position: relative;
  width: 100%;
  max-width: 1400px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-planks {
  display: flex;
  width: 100%;
  gap: 0;
}

.profile-plank-left-wrapper,
.profile-plank-right-wrapper {
  flex: 1;
  display: flex;
}

.profile-plank-left-wrapper {
  justify-content: flex-start;
}

.profile-plank-right-wrapper {
  justify-content: flex-end;
}

.profile-plank {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 2.5rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
  display: flex;
}

.profile-plank:hover {
  border-color: var(--border-hover);
  box-shadow: 0 15px 35px rgba(77, 166, 255, 0.15);
}

.profile-plank-left {
  border-radius: 40px 0 0 40px;
  padding-left: 40px;
  padding-right: 60px;
  justify-content: flex-start;
}

.profile-plank-right {
  border-radius: 0 40px 40px 0;
  padding-right: 40px;
  padding-left: 60px;
  justify-content: flex-end;
}

.profile-plank-content {
  max-width: 320px;
}

.profile-plank-left .profile-plank-content {
  text-align: left;
}

.profile-plank-right .profile-plank-content {
  text-align: right;
}

.profile-plank-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.profile-plank-text {
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
}

.btn-primary-custom {
  background: var(--accent-primary);
  border: none;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.2s;
}

.btn-primary-custom:hover {
  background: #005bb5;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 1000px) {
  .profile-planks {
    flex-direction: column;
    gap: 1rem;
  }
  
  .profile-plank-left-wrapper,
  .profile-plank-right-wrapper {
    justify-content: center;
  }
  
  .profile-plank-left,
  .profile-plank-right {
    border-radius: 40px !important;
    padding: 2rem !important;
    justify-content: center;
  }
  
  .profile-plank-left .profile-plank-content,
  .profile-plank-right .profile-plank-content {
    text-align: center !important;
    margin: 0 auto;
  }
}
</style>