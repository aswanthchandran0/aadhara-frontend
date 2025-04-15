import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType:"autoUpdate",
      includeAssets:['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest:{
        name:'Aadhaar Card Magic Extractor',
        short_name:"Aadhara",
        description:'Effortlessly upload Aadhaar card images and generate animated digital Aadhaar cards with AI-powered OCR. Download clean, stylish frontend and backend visuals.',
        theme_color: '#0b5ed7', // A smooth blue tone
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
