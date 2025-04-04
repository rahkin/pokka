import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/pokka-snakes-gl/dist/',
    publicDir: 'public',
    server: {
        port: 3001,
        strictPort: true
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
            }
        },
        copyPublicDir: true
    }
}); 