/**
 * Vérifie si une chaîne de caractères est un email valide.
 * @param {string} email L'email à valider.
 * @returns {boolean} True si l'email est valide, sinon false.
 */
export function isEmailValid(email) {
  // Vérifie que l'entrée est bien une chaîne de caractères et non vide.
  if (typeof email !== "string" || email.length === 0) {
    return false;
  }

  // Expression régulière simple pour la validation d'email.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}