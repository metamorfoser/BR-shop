import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  // Måste matcha repo-namn
  base: "/BR-shop/",

  plugins: [react()],

  // så att GitHub Pages alla routes fungerar
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // GitHub Pages använder 404.html som fallback för SPA-routing
        404: resolve(__dirname, "index.html"),
      },
    },
  },

  server: {
    open: true,
    port: 5173,
  },
});
