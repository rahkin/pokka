import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    manifest: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'web3-vendor': [
            'wagmi',
            'viem',
            '@rainbow-me/rainbowkit',
            '@wagmi/core'
          ],
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'assets/images/[name][extname]';
          }
          if (/css/i.test(ext)) {
            return 'assets/css/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false
      }
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
    },
    fs: {
      strict: false
    }
  },
  preview: {
    port: 5173,
    host: true
  },
  optimizeDeps: {
    include: [
      'wagmi',
      'viem',
      '@rainbow-me/rainbowkit',
      '@wagmi/core'
    ],
    exclude: [],
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'top-level-await': true
      }
    },
    force: true
  }
}) 