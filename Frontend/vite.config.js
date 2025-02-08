import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    chunkSizeWarningLimit: 1024, // Reduce chunk size limit to avoid big files
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Split large dependencies into separate chunks
          }
        },
      },
    },
  },

  server: {
    host: '0.0.0.0', // Allow external access
    port: 5173, // Use Render’s assigned port
  },

  optimizeDeps: {
    exclude: ['@mui/material', '@mui/icons-material', 'react-redux'], // Replace with heavy dependencies if needed
  },
})
