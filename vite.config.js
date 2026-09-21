import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages sub-path: https://<user>.github.io/react_course/
export default defineConfig({
  plugins: [react()],
  base: '/react_course/',
})
