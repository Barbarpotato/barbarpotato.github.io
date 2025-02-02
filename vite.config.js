import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/barbarpotato.github.io/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
  },
  build: {
    outDir: "dist",
  },
});
