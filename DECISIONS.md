# Document de Décisions Techniques — API AdTech

## Objectif

Ce document décrit les choix techniques, arbitrages et difficultés rencontrées lors du développement de l'API AdTech.

---

## 1. Choix du framework backend

Le backend est développé avec **NestJS**.

**Raisons :**
- Architecture modulaire
- Injection de dépendances
- Organisation claire
- Bonnes pratiques backend

**Structure utilisée :**

```
Controller → Service → Database
```

---

## 2. Choix de la base de données

La base de données utilisée est **MongoDB** avec **Mongoose**.

**Raisons :**
- Bonne performance en écriture
- Structure flexible
- Facile à scaler horizontalement

> MongoDB est adapté pour stocker les campagnes publicitaires sous forme de documents.

---

## 3. Gestion des statistiques

Les statistiques (impressions, campagnes actives) sont calculées à partir des données stockées.

Pour un système réel, ces statistiques devraient être :
- Pré-calculées
- Mises en cache
- Mises à jour via workers

---

## 4. Gestion des impressions

Dans cette version simplifiée, les impressions sont stockées directement dans la base.

**Limite :** Cela peut devenir coûteux à grande échelle.

**Solution pour production :** Utiliser un système avec :
- Cache Redis
- Traitement asynchrone
- File de messages

---

## 5. Gestion des erreurs

L'API renvoie des erreurs HTTP standard :

| Code | Description |
|------|-------------|
| `400` | Erreurs de validation |
| `404` | Ressources inexistantes |
| `500` | Erreurs serveur |

Cela permet au frontend de gérer les erreurs correctement.

---

## 6. Simplicité volontaire pour le test

Certaines fonctionnalités ne sont pas implémentées afin de garder un projet simple :
- Authentification
- Rate limiting
- Cache Redis
- Système de queue
- Monitoring

> Ces éléments seraient nécessaires dans un système AdTech réel.

---

## Améliorations possibles

- Authentification **JWT**
- Cache **Redis** pour les campagnes actives
- **Message queue** pour les impressions
- **MongoDB cluster**
- Monitoring (logs, métriques)
- Tests unitaires et d'intégration