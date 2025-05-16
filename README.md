
---

### `README.md` – Frontend (`e-banking-web/`)

# 💻 E-Banking Web (Frontend Angular)

Une application Angular pour la gestion des comptes bancaires connectée à un backend Spring Boot.

---

## 📌 Fonctionnalités

- Authentification avec JSON Web Token (JWT)
- Gestion des clients :
  - Création, modification, suppression
  - Recherche par nom ou email
- Gestion des comptes :
  - Création de comptes courants et comptes épargnes
  - Consultation des soldes et historique des opérations
  - Dépôt (CREDIT) / Retrait (DEBIT)
- Dashboard interactif avec Chart.js :
  - Statistiques globales
  - Graphiques dynamiques pour l’aide à la décision
- Gestion des utilisateurs :
  - Traçabilité par utilisateur authentifié
  - Changement de mot de passe

---

## 🧱 Architecture du projet

```text
e-banking-web/
├── .vscode/
├── environments/
├── node_modules/
├── public/
└── src/
    ├── app/
    │   ├── accounts/
    │   ├── customers/
    │   ├── model/
    │   ├── navbar/
    │   ├── new-customer/
    │   ├── services/
    │   ├── dashboard/
    │   ├── auth/
    │   ├── app-routing.module.ts
    │   ├── app.component.css
    │   ├── app.component.html
    │   ├── app.component.ts
    │   └── app.module.ts
    ├── index.html
    └── main.ts
```

##  Technologies utilisées
- Framework : Angular 17
- HTTP Client : Communication avec API REST Spring Boot
- Authentification : JWT
- UI : Bootstrap / HTML / CSS
- Graphiques : Chart.js (ng2-charts)
- Angular CLI

## ▶️ Installation & Lancement
### 1. Cloner le projet
git clone https://github.com/ton-compte/e-banking-web.git
cd e-banking-web

### 2. Installer les dépendances
npm install

### 3. Configurer l’environnement
# Fichier : src/environments/environment.ts
export const environment = {
  production: false,
  backendHost: 'http://localhost:8085'
};

### 4. Lancer le serveur Angular
ng serve
