import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Rend les API de Vitest (describe, it, expect) globales comme dans Jest
    globals: true,
    // Définit l'environnement de test pour simuler un DOM (grâce à jsdom)
    environment: "jsdom",
    // Fichier à exécuter avant chaque fichier de test pour la configuration
    setupFiles: "./src/setupTests.jsx",
  },
})
