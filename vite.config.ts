import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/api/test/coverage': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    },
    // Serve coverage reports statically
    static: {
      directory: 'coverage',
      serveDirectory: '/coverage'
    }
  },
});