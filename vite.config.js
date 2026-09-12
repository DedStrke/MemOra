import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Firebase Hosting serves the site from the domain root
  // (https://memoraa.web.app/), so there is no path prefix to add. Runtime
  // string paths to public/ files still go through import.meta.env.BASE_URL
  // rather than being hard-coded, so moving the site again stays a one-line
  // change here (see AtmosphereBackground.jsx).
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    // No source maps in the production bundle. They are a build artefact
    // for debugging, and shipping them publishes the readable original
    // source (including every comment) alongside the minified output and
    // adds megabytes to the deploy. Vite's default is already false; it is
    // set explicitly so it cannot be turned on by accident.
    sourcemap: false,
  },
  resolve: {
    // Enables imports like `import Button from '@/components/ui/Button'`
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
})
