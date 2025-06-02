import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Whenever the frontend makes a request to '/api',
      // Vite will redirect it to 'http://localhost:3000' 
      '/api': 'http://localhost:3000',
    },
  },
});