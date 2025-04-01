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
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.')
                    let extType = info[info.length - 1]
                    if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
                        extType = 'img'
                    } else if (/\.(mp3|wav|ogg)$/.test(assetInfo.name)) {
                        extType = 'audio'
                    } else if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
                        extType = 'fonts'
                    }
                    return `assets/${extType}/[name]-[hash][extname]`
                }
            }
        }
    },
    esbuild: {
        target: 'es2020'
    }
}); 