import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tracking from './scripts/tracking-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tracking()],
})
