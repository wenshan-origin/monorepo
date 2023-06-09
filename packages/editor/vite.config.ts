import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
  ],
  root: './',
  resolve: {
    alias: {
      '@': fileURLToPath( new URL( './src', import.meta.url ) )
    }
  }
})