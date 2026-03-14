import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userData = ref(null)
  const isRegistered = ref(false)

  const storedUser = localStorage.getItem('dpo_user')
  const storedRegistered = localStorage.getItem('dpo_registered')
  
  if (storedUser && storedRegistered === 'true') {
    try {
      userData.value = JSON.parse(storedUser)
      isRegistered.value = true
    } catch (e) {
      console.error('Error parsing user data:', e)
    }
  }

  const fullName = computed(() => userData.value?.fullname || '')
  const initials = computed(() => {
    if (!userData.value?.fullname) return 'АИ'
    const words = userData.value.fullname.split(/\s+/).filter(w => w.length > 0)
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return words[0]?.substring(0, 2).toUpperCase() || 'АИ'
  })
  
  function register(data) {
    userData.value = data
    isRegistered.value = true
    localStorage.setItem('dpo_user', JSON.stringify(data))
    localStorage.setItem('dpo_registered', 'true')
  }
  
  function logout() {
    userData.value = null
    isRegistered.value = false
    localStorage.removeItem('dpo_user')
    localStorage.removeItem('dpo_registered')
  }
  
  return {
    userData,
    isRegistered,
    fullName,
    initials,
    register,
    logout
  }
})