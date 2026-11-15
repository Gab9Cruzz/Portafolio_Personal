import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages sirve el sitio en https://gab9cruzz.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    sourcemap: false,
  },
})
