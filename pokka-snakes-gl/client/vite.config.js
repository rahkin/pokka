import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/pokka-snakes-gl/',
    publicDir: 'public',
    server: {
        port: 3000,
        proxy: {
            '/socket.io': {
                target: 'ws://localhost:3001',
                ws: true
            }
        }
    },
    resolve: {
        dedupe: ['three'],
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    optimizeDeps: {
        include: ['three']
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        commonjsOptions: {
            include: [/three/]
        }
    },
    esbuild: {
        target: 'es2020'
    }
}); 