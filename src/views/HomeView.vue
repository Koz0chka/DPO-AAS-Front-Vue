<template>
  <section class="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4">
    <MonolithHero @click="handleStart" />
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import MonolithHero from '@/components/MonolithHero.vue'

const router = useRouter()
const userStore = useUserStore()

function handleStart() {
  console.log('Navigating to:', userStore.isRegistered ? 'Profile' : 'Register')
}
</script>