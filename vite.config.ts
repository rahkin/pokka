import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'three': 'three',
      'postprocessing': 'postprocessing'
    },
  },
  optimizeDeps: {
    include: ['three', 'postprocessing']
  },
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
    commonjsOptions: {
      include: [/three/, /postprocessing/]
    }
  },
  server: {
    port: 5173,
  },
}) 