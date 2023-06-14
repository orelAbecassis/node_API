# Application de gestion de produits

Cette application est développée avec Node.js et Express.js et permet de gérer des produits et des catégories. Elle offre une API permettant de récupérer, créer, mettre à jour et supprimer des produits et des catégories.

## Configuration

Avant de lancer l'application, assurez-vous de configurer les variables d'environnement. Vous pouvez utiliser le fichier `.env` pour définir ces variables.

Exemple de contenu du fichier `.env` :
PORT=8081


## Installation

1. Clonez ce dépôt de code sur votre machine locale.
2. Installez les dépendances en exécutant la commande suivante :

npm install
##Utilisation
1. Lancez l'application en exécutant la commande suivante :
npm start

2. L'application sera accessible à l'adresse http://localhost:8081.

##Documentation de l'API
La documentation de l'API est générée à l'aide de Swagger et est accessible à l'adresse http://localhost:8081/api/v1/docs. Vous y trouverez les endpoints disponibles ainsi que des exemples de requêtes.

##Endpoints
GET /api/v1/produits : Récupérer tous les produits.
GET /api/v1/produits/{id} : Récupérer un produit par ID.
POST /api/v1/produits : Créer un nouveau produit.
PUT /api/v1/produits/{id} : Mettre à jour un produit par ID.
DELETE /api/v1/produits/{id} : Supprimer un produit par ID.
GET /api/v1/categories : Récupérer toutes les catégories.
GET /api/v1/categories/{id} : Récupérer une catégorie par ID.
POST /api/v1/categories : Créer une nouvelle catégorie.
PUT /api/v1/categories/{id} : Mettre à jour une catégorie par ID.
DELETE /api/v1/categories/{id} : Supprimer une catégorie par ID.

##Contribuer
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou à envoyer une demande de fusion (pull request).



