import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve:{
    alias:{
      '@': path.resolve(import.meta.dirname,'./src'),
      '@api': path.resolve(import.meta.dirname,'./src/api'),
      '@components': path.resolve(import.meta.dirname,'./src/components'),
      '@pages': path.resolve(import.meta.dirname,'./src/pages'),
      '@styles': path.resolve(import.meta.dirname,'./src/styles'),
      '@stores': path.resolve(import.meta.dirname,'./src/stores'),
      '@assets': path.resolve(import.meta.dirname,'./src/assets'),

    },
  },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.js'
    }

})
