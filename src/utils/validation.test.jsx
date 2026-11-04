import { isEmailValid } from "./validation";

describe("isEmailValid", () => {
  it("devrait retourner true pour un email valide", () => {
    expect(isEmailValid("test@example.com")).toBe(true);
  });

  it("devrait retourner false pour un email sans arobase", () => {
    expect(isEmailValid("test.example.com")).toBe(false);
  });

  it("devrait retourner false pour un email sans domaine", () => {
    expect(isEmailValid("test@.com")).toBe(false);
  });

  it("devrait retourner false pour un email sans extension de domaine", () => {
    expect(isEmailValid("test@example")).toBe(false);
  });

  it("devrait retourner false pour une chaîne de caractères vide", () => {
    expect(isEmailValid("")).toBe(false);
  });

  it("devrait retourner false pour une entrée null ou undefined", () => {
    expect(isEmailValid(null)).toBe(false);
    expect(isEmailValid(undefined)).toBe(false);
  });
});