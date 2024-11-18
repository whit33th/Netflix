import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // или 'brotliCompress' для brotli
      threshold: 10240, // сжимать файлы размером больше 10KB
    })
  ],
  server: {
    host: true,
    port: 3000
  }
});
