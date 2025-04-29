import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/games/pokka-snakes-gl/dist/',
    publicDir: 'public',
    server: {
        port: 3001,
        strictPort: true,
        origin: 'http://localhost:5173'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            },
            output: {
                manualChunks: undefined,
            },
        },
        copyPublicDir: true,
        minify: 'terser',
        sourcemap: false
    }
}); 