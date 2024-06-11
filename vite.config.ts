import { join } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, './src/'),
    },
  },
})
