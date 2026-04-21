import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      // 1. FORCE HMR to be true so the browser updates on save
      hmr: true, 
      
      // 2. Add Watch Polling so Windows detects your file changes
      watch: {
        usePolling: true,
        interval: 100,
      },
      
      // 3. Ensure host is true for easier debugging
      host: true,
    },
  };
});