import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network addresses (0.0.0.0:3000)
    port: 3000,
    open: false,
  },
  preview: {
    host: '0.0.0.0', // Preview server on 0.0.0.0:3000
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
