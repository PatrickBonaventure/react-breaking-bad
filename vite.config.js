import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://patrickbonaventure.github.io/react-breaking-bad/",
  plugins: [react()]
})
