import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['spider-favicon.svg', 'avatar-placeholder.svg'],
      manifest: {
        name: 'Satyam Jha | Portfolio',
        short_name: 'Satyam',
        description: 'Spider-Verse themed developer portfolio',
        theme_color: '#0d0d14',
        background_color: '#0d0d14',
        display: 'standalone',
        icons: [
          {
            src: 'spider-favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'spider-favicon.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})
