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
    include: ['three', 'postprocessing', 'react', 'react-dom', 'react-router-dom', '@rainbow-me/rainbowkit', 'wagmi'],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'web3-vendor': ['@rainbow-me/rainbowkit', 'wagmi', 'viem']
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://dev-pokka.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
}) 