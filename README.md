# Projet Weeb- Frontend

## Description
Frontend React avec Vite pour consommer l'API Django sécurisée avec JWT.  
Permet de se connecter, afficher un dashboard et tester les endpoints sécurisés.

---

## Stack
- React 19+
- Vite 7+
- Axios
- react-router-dom

---

## Installation

1. **Cloner le projet**
```bash
git clone https://github.com/zeroualm/weeb_mathis_zeroual
```

2. **Installer les dépendances**
```bash
npm install
```

3. Lancer le serveur
```bash
npm run dev
```

---

## Fonctionnalités

- Page /login : connexion avec email et mot de passe
- Page /blog : accès aux articles
- Page /home : accès aux endpoints sécurisés

---

## Gestion des tokens

- access_token stocké en sessionStorage
- refresh_token géré côté serveur via HttpOnly cookie
- Les requêtes API renouvellent automatiquement l’access_token si expiré