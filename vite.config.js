import { defineConfig } from 'vite';
// import solidPlugin from 'vite-plugin-solid';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
