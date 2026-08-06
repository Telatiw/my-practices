import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server:{
    watch:{
      usePolling:false,
      interval:5000,
    },
    hmr:{
      overlay:false,
    }
  }
})
