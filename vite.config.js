import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/DPO-AAS-Front-Vue/',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    assetsDir: 'assets'
  }
})