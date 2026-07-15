import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/tottat/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/*.png', 'audio/**/*', 'characters/*.svg'],
      manifest: {
        name: 'Tot & Tat English',
        short_name: 'Tot & Tat',
        description: 'Fun English learning for Hong Kong primary students',
        theme_color: '#FFF8E7',
        background_color: '#FFF8E7',
        display: 'standalone',
        orientation: 'any',
        start_url: '/tottat/',
        scope: '/tottat/',
        icons: [
          { src: '/tottat/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/tottat/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/tottat/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp3,json}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
