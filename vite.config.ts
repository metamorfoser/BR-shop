import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Viktigt: base måste matcha GitHub-repo-namn
// Annars fungerar inte routing när du publicerar på GitHub Pages.
export default defineConfig({
  base: '/BR-shop/',

  
  server: {
    open: true,   // öppnar webbläsaren automatiskt
    port: 5173    // port för dev-servern
  },

  plugins: [react()],
})
