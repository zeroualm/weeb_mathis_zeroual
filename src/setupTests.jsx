// Importe les "matchers" (assertions) personnalisés de jest-dom pour Vitest.
// Cela nous permet d'écrire des choses lisibles comme : expect(element).toBeInTheDocument();
import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'

// évites les fuites pour les tests qui suivent
afterEach(() => {
  sessionStorage.clear()
})