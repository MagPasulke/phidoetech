import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom Domain via GitHub Pages -> base bleibt '/'
export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
        port: 5173,
        open: true
    }
});
