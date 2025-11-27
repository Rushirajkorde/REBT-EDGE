import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // This is crucial to prevent "process is not defined" errors in browser
  define: {
    'process.env': {}
  }
});