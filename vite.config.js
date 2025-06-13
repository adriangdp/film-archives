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
      '@': path.resolve(__dirname,'./src'),
      '@api': path.resolve(__dirname,'./src/api'),
      '@components': path.resolve(__dirname,'./src/components'),
      '@pages': path.resolve(__dirname,'./src/pages'),
      '@styles': path.resolve(__dirname,'./src/styles'),
      '@stores': path.resolve(__dirname,'./src/stores'),
      '@assets': path.resolve(__dirname,'./src/assets'),

    },
  },
  server:{
    port:3000,
    open:true
  },
  preview:{
    port:3001,
  }

})
