# AdTech API

> Système de gestion et diffusion de campagnes publicitaires.  
> Backend développé avec **NestJS** et **MongoDB**.

---

## Technologies utilisées

| Technologie | Rôle |
|---|---|
| Node.js (v24) | Runtime |
| NestJS | Structure backend & API REST |
| MongoDB | Base de données |
| Mongoose | Modèles & schémas |

---

## Installation et lancement

### 1. Cloner le projet

```bash
git clone 
cd adtech-api
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer MongoDB

```bash
# Installation (Ubuntu)
sudo apt install -y mongodb

# Lancement
sudo systemctl start mongod

# Vérification
mongosh
```

> Base de données utilisée : `adtech`

### 4. Lancer le serveur

```bash
npm run start:dev
```

Le serveur sera disponible sur : **`http://localhost:3000`**

---

## Architecture et choix techniques

```
Controller → Service → Database
```

- **NestJS** — backend structuré et modulaire
- **Mongoose** — validation et manipulation des documents MongoDB
- **DTOs** — sécurisation des données entrantes via l'API

---

## Améliorations possibles

1. **Authentification JWT** — sécuriser les endpoints
2. **Rate limiting** — protéger le serveur contre les abus
3. **Gestion centralisée des erreurs** — messages clairs côté frontend
4. **Cache Redis** — optimiser les stats et les campagnes fréquentes
5. **Tests unitaires et d'intégration**
6. **Dockerisation** — simplifier le déploiement et la configuration MongoDB

