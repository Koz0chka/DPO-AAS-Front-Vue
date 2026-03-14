<template>
  <div class="wheel-container position-absolute top-50 start-50 translate-middle z-2">
    <div 
      ref="wheelRef"
      class="wheel"
      @mousemove="handleWheelMove"
      @mouseleave="resetWheel"
      @click="selectProject"
    >

      <div 
        v-for="(project, index) in projects" 
        :key="project.id"
        class="wheel-sector"
        :class="{ active: activeIndex === index, dimmed: activeIndex !== null && activeIndex !== index }"
        :style="getSectorStyle(index)"
      >
        <div 
          class="wheel-sector-bg"
          :style="{ background: project.gradient }"
        ></div>
      </div>

      <div 
        v-for="(project, index) in projects"
        :key="'label-' + project.id"
        class="wheel-sector-label"
        :style="getLabelStyle(index)"
      >
        <div class="wheel-sector-name">{{ project.name }}</div>
        <div class="wheel-sector-meta">{{ project.meta }}</div>
      </div>

      <div class="wheel-center">
        <div class="text-center">
          <small class="text-muted d-block">Выберите проект</small>
          <span class="fw-semibold" style="color: var(--accent-primary);">{{ selectedName }}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['select'])

const wheelRef = ref(null)
const activeIndex = ref(null)
const selectedName = ref('—')

const sectorAngle = computed(() => 360 / props.projects.length)

function getSectorStyle(index) {
  const startAngle = index * sectorAngle.value - 90
  return {
    transform: `rotate(${startAngle}deg)`
  }
}

function getLabelStyle(index) {
  const startAngle = index * sectorAngle.value - 90
  const midAngle = startAngle + sectorAngle.value / 2
  const angleRad = midAngle * Math.PI / 180
  const labelRadius = 135
  
  return {
    left: `${200 - Math.cos(angleRad) * labelRadius}px`,
    top: `${200 - Math.sin(angleRad) * labelRadius}px`,
    transform: 'translate(-50%, -50%)',
    opacity: activeIndex.value === null || activeIndex.value === index ? 1 : 0.4
  }
}

function handleWheelMove(e) {
  if (!wheelRef.value) return
  
  const rect = wheelRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  const dx = e.clientX - centerX
  const dy = e.clientY - centerY
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance < 70 || distance > 200) {
    resetWheel()
    return
  }

  let angle = Math.atan2(-dy, -dx) * (180 / Math.PI)
  if (angle < 0) angle += 360

  let normalizedAngle = angle + 90
  if (normalizedAngle >= 360) normalizedAngle -= 360
  
  const index = Math.floor(normalizedAngle / sectorAngle.value)
  
  if (activeIndex.value !== index && index < props.projects.length) {
    activeIndex.value = index
    selectedName.value = props.projects[index].name
  }
}

function resetWheel() {
  activeIndex.value = null
  selectedName.value = '—'
}

function selectProject() {
  if (activeIndex.value !== null) {
    emit('select', props.projects[activeIndex.value])
  }
}
</script>

<style scoped>
.wheel-container {
  z-index: 10;
}
</style>