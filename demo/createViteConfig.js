import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default function createViteConfig(root) {
    return defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
                'web-liquid-glass': path.resolve(__dirname, '../src'),
                'components': path.resolve(__dirname, './components'),
                'assets': path.resolve(__dirname, './assets'),
            },
        },
        root,
    });
}
