import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ← Enables describe/it/expect globally
    environment: "jsdom", // ← Needed for DOM-related testing
    setupFiles: "./src/setupTests.js", // ← Optional: for jest-dom
  },
});
