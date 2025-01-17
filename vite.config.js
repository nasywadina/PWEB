import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Membuka akses untuk semua perangkat di jaringan lokal
    port: 5173,       // Pastikan port sesuai dengan yang Anda gunakan
  }
})
