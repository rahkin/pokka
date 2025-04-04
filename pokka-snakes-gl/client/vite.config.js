import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '',
    publicDir: 'public',
    server: {
        port: 3001,
        strictPort: true
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'three': 'three',
            'three/examples/jsm/controls/OrbitControls': 'three/examples/jsm/controls/OrbitControls.js'
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
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split('.');
                    const ext = info[info.length - 1];
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                        return 'assets/img/[name][extname]';
                    }
                    if (ext === 'mp3') {
                        return 'assets/audio/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js'
            }
        }
    }
}); 