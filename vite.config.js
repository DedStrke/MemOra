import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/MemOra/ on GitHub Pages, so every
  // asset URL needs the repo name prefixed - Vite handles this for anything
  // it processes (imports, index.html tags); runtime string paths to
  // public/ files still need import.meta.env.BASE_URL by hand (see
  // AtmosphereBackground.jsx).
  base: '/MemOra/',
  plugins: [react(), tailwindcss()],
  resolve: {
    // Enables imports like `import Button from '@/components/ui/Button'`
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
})
