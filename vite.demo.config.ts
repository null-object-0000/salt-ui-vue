import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/salt-ui-vue/',
  plugins: [vue(), legacy()],
  build: {
    outDir: 'dist/demo',
  }
})