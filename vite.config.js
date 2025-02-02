import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",
  plugins: [react()],
  esbuild: {
    loader: "jsx",
  },
  build: {
    outDir: "dist",
  },
});
