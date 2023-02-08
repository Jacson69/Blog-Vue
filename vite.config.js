import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from './svg-loader.mjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),svgLoader('./src/icons')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
