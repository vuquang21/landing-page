import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Split vendor chunks so React + Lenis + icons cache independently.
        manualChunks: {
          react: ['react', 'react-dom'],
          lenis: ['lenis'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
