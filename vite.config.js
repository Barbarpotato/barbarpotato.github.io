import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Replace <repository> with the name of your repository
  build: {
    outDir: 'build' // Change from 'dist' to 'build'
  }
});
